const Patient=require('../models/patient');
module.exports.create=async function(req,res){
    try{
        console.log("he iz patient ",req.body.name)
        let patient=await Patient.findOne({phoneNo:req.body.phoneNo});
        if(!patient){
            Patient.create(req.body);
            return res.json(200,{
                id:patient.id,
                message:"patient id is created",
                name:req.body.name,
                phoneNo:req.body.phoneNo,
            })
        }else{
            return res.json(200,{
                id:patient.id,
                message:"patient already exists here his/her info",
                name:patient.name,
                phoneNo:patient.phoneNo
            })
        }

    }catch(err){
        console.log("internal server error in creatin patien id");
        return res.json(500,{
            message:"internal sever error"
        })
    }
}