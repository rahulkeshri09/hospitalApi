const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    phoneNo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    reports:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Report'
        },
    ]
},{
    timestamps:true
});
const Patient=mongoose.model('Patient',patientSchema);
module.exports=Patient;