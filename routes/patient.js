const express=require('express');
const passport=require('passport');
const router=express.Router();
//for fire up the controllers actions
const patientController=require('../controllers/userPatient_controller');
const reportController=require('../controllers/report_controller');
const { session } = require('passport');
router.post('/register',passport.authenticate('jwt',{session:false}),patientController.create);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),reportController.create);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),reportController.patientReport);
module.exports=router;