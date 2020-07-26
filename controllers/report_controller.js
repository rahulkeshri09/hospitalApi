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