const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');
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
module.exports.login=async function(req,res){
    try{
        let doctor=await Doctor.findOne({email:req.body.email});
        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                message:"invalid doctor name or password"
            });
        }
        return res.json(200,{
            message:"log in successfully",
            data:{
                token:jwt.sign(doctor.toJSON(), 'hospital' , {expiresIn:'10000000'})
            }
        })
    }catch(err){
        console.log('ineternal server error ::DOCTOR login',err);
        return res.json(500,{
            message:"internal server error"
        })
    }
}