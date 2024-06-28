const express=require('express');
const register=require('../controllers/User/createUser.js');
const login=require('../controllers/User/loginUser.js');

const router=express.Router();

router.post('/register',register);
router.post('/login',login);

module.exports=router;