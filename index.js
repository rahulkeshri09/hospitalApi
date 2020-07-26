const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
app.use(express.urlencoded());
//entry point of each routes
app.use('/',require('./routes'));
// starting the server
app.listen(port,function(err){
    if(err){
        console.log(`error in starting the server:${err}`);
        return
    }
    console.log(`server is running on port : ${port}`);
})