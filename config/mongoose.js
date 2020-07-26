const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/hospitalApiDevelopment');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error in connecting to mongoDB"));
db.once('open',function(){
    console.log("connected to database :: mongoDB");
})
module.exports=db;