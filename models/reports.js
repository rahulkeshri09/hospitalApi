const mongoose=require('mongoose');
const reportSchema=new mongoose.Schema({
    doctorName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    patientName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }

},{
    timestamps:true
});
const Report=mongoose.model('Report',reportSchema);
module.exports=Report;