const express=require('express');
const router=express.Router();
const passport=require('passport');
const reportController=require('../controllers/report_controller');
router.post('/status',passport.authenticate('jwt',{session:false}),reportController.status);
console.log("inside reports");
module.exports=router;