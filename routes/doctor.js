const express=require('express');
const router=express.Router();
//for fire up the controllers actions
const doctorController=require('../controllers/userDoctor_controller');
router.post('/register',doctorController.create);
router.post('/login',doctorController.login);
module.exports=router;