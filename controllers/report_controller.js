const Report=require('../models/reports');
const Doctor=require('../models/doctor');
const Patient=require('../models/patient');
const passport = require('passport');
module.exports.create=async function(req,res){
    try{
        let doctorName=await Doctor.findById(req.user._id);
        let patientName=await Patient.findById(req.params.id);
        console.log("req.user",doctorName.name);
        console.log("req.params",patientName.name);
        let report=await Report.create({
            doctorName:req.user._id,
            status:req.body.status,
            date:req.body.date,
            patientName:req.params.id
        });
        console.log("this iz report id",report._id);
        console.log("this iz patient report",patientName.reports);
        patientName.reports.push(report._id);
        patientName.save();
        return res.json(200,{
            message:"report created successfull",
            doctorName:doctorName.name,
            status:req.body.status,
            date:req.body.date,
            patientName:patientName.name
        })
    }catch(err){
        console.log("error in creating report",err);
        return res.json(500,{
            message:"internal server error"
        });
    }
}
module.exports.patientReport=async function(req,res){
    try{
        console.log("req.params",req.params.id);
        let patient=await Patient.findById(req.params.id);
        console.log("this is patient repot",patient);
        var arr=new Array();
        for(let i of patient.reports){
            let repo= await Report.findById(i);
            let docName=await Doctor.findById(repo.doctorName);
            let data={
                doctorName:docName.name,
                status:repo.status,
                date:repo.date
            }
            arr.push(data);
        }
        return res.json(200,{
            message:"succesfully generated patient report",
            name:patient.name,
            reports:arr
        })
    }catch(err){
        console.log('error in generating patient report',err);
        return res.json(500,{
            message:"internal server error",
        })
    }
}
module.exports.status=async function(req,res){
    try{
        console.log(req.body.status);
        let status=await Patient.find({});
        let arr=new Array();
        for(let i of status){
            let patientName=i.name;
            for(let j of i.reports){
                let patientStatus=await Report.findById(j);
                if(patientStatus.status==req.body.status){
                    arr.push({patientName:patientName,
                    status:patientStatus.status,
                    date:patientStatus.date});
                }
            }
        }
        console.log(arr);
       // console.log("this is statuses",status);
        return res.json(200,{
            message:"successfully generated ",
            data:arr

        })
    }catch(err){
        console.log("error in generating status");
        return res.json(500,{
            message:"internal server error"
        })
    }
    
}