const express=require('express');
const router=express.Router();
const passport=require('passport');
//for fire up the controllers actions
const reportController=require('../controllers/report_controller');
router.post('/status',passport.authenticate('jwt',{session:false}),reportController.status);
console.log("inside reports");
module.exports=router;