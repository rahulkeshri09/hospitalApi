const express=require('express');
const passport=require('passport');
const router=express.Router();
const patientController=require('../controllers/userPatient_controller');

const { session } = require('passport');
router.post('/register',passport.authenticate('jwt',{session:false}),patientController.create);

module.exports=router;