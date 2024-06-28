const express=require('express');
const register=require('../controllers/createUser.js');
const router=express.Router();

router.post('/register',register)

module.exports=router;