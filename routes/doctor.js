const express=require('express');
const router=express.Router();
const doctorController=require('../controllers/userDoctor_controller');
router.post('/register',doctorController.create);
module.exports=router;