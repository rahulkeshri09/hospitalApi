const Doctor=require('../models/doctor');
const jwt=require('jsonwebtoken');
module.exports.create=async function(req,res){
    try{
        console.log("inside try");
        //search doctor by using doctor email
        let user=await Doctor.findOne({email:req.body.email});
        // if doctor not exists in database the new doctor id is created
        if(!user){
            Doctor.create(req.body);
            return res.json(200,{
                message:"doctor new id created successful",
                name:req.body.name,
                email:req.body.email
            });
        }
        // if doctor already exists then say log in using your email password
        return res.json(200,{
            message:"doctor already exists plzz log in your  by ur email pwd",
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
        //search doctor by using doctor email
        let doctor=await Doctor.findOne({email:req.body.email});
        // if password not match or doctor not found then res status 422 send
        if(!doctor || doctor.password != req.body.password){
            return res.json(422,{
                message:"invalid doctor name or password"
            });
        }
        // if doctor found and password match then a jwt generated and send it 
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