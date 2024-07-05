const express=require('express');
const register=require('../controllers/teachers/createTeachers.js');
//const login=require('../controllers/User/loginUser.js');
const getAllTeachers = require('../controllers/teachers/getAllTeachers.js');
//const profile = require('../controllers/User/profile.js');
//const authentication=require('../middleware/auth.js');


const router=express.Router();

router.post('/registerTeacher',register);
//router.post('/login',login);
router.get('/allTEachers',getAllTeachers)
//router.get('/profile',authentication,profile)

module.exports=router;