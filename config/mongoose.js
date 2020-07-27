const mongoose=require('mongoose');
// creatin a database in mongoDb which name is hospitalApiDevelopment
mongoose.connect('mongodb://localhost/hospitalApiDevelopment');
//connect to mongoose
const db=mongoose.connection;
//if any error occur then this code excuted
db.on('error',console.error.bind(console,"error in connecting to mongoDB"));
//if no error occur then this code excuted
db.once('open',function(){
    console.log("connected to database :: mongoDB");
})
module.exports=db;