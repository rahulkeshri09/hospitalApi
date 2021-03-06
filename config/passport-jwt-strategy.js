const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../models/doctor');
let opts={
    //send token via header from the client
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    //key uses in in encryption
    secretOrKey:'hospital'
}
//using jwt for authentication and authorization 
passport.use(new jwtStrategy(opts,function(jwtPayload,done){
    Doctor.findById(jwtPayload._id,function(err,doctor){
        if(err){
            console.log('error in finding user from jwt',err);
            return
        }
        if(doctor){
            return done(null,doctor);
        }else{
            console.log("its testing");
            return done(null,false);
        }
    });
}));
module.exports=passport;