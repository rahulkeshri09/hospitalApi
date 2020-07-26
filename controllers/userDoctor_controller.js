const Doctor=require('../models/doctor');
module.exports.create=async function(req,res){
    try{
        console.log("inside try");
        let user=await Doctor.findOne({email:req.body.email});
        if(!user){
            Doctor.create(req.body);
            return res.json(200,{
                message:"doctor new id created successful",
                name:req.body.name,
                email:req.body.email
            });
        }
        return res.json(200,{
            message:"doctor already exists",
            name:req.body.name,
            email:req.body.email
        })
    }catch(err){
        console.log('ineternal server error');
        return res.json(500,{
            message:"internal server error"
        });
    }
}