const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
//using json web token for authenticating the docor
const passportJWT=require('./config/passport-jwt-strategy');
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