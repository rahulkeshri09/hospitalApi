const Patient=require('../models/patient');
module.exports.create=async function(req,res){
    try{
        //console.log("he iz patient ",req.body.name)
        //search patient by using patient PhoneNo.
        let patient=await Patient.findOne({phoneNo:req.body.phoneNo});
        //if patient not found then create a new patien id in database
        if(!patient){
            Patient.create(req.body);
            return res.json(200,{
                id:patient.id,
                message:"patient id is created",
                name:req.body.name,
                phoneNo:req.body.phoneNo,
            })
        }else{
            //if patient already found in database then send the patient details
            return res.json(200,{
                id:patient.id,
                message:"patient already exists here his/her info",
                name:patient.name,
                phoneNo:patient.phoneNo
            })
        }
    // if any error found then catch excuted 
    }catch(err){
        //console.log("internal server error in creatin patien id");
        return res.json(500,{
            message:"internal sever error"
        })
    }
}