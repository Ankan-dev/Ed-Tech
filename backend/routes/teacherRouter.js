const express=require('express');
const register=require('../controllers/teachers/createTeachers.js');
//const login=require('../controllers/User/loginUser.js');
//const getAllUsers = require('../controllers/User/getAllUsers.js');
//const profile = require('../controllers/User/profile.js');
//const authentication=require('../middleware/auth.js');


const router=express.Router();

router.post('/registerTeacher',register);
/*router.post('/login',login);
router.get('/allUsers',getAllUsers)
router.get('/profile',authentication,profile)*/

module.exports=router;