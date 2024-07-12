const express=require('express');
const register=require('../controllers/User/createUser.js');
const {login,refreshAccess }=require('../controllers/User/loginUser.js');
const logout=require('../controllers/User/logoutUser.js');
const getAllUsers = require('../controllers/User/getAllUsers.js');
const profile = require('../controllers/User/profile.js');
const authentication=require('../middleware/auth.js');


const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/refresh-token',refreshAccess);
router.post('/logout',authentication,logout);
router.get('/allUsers',getAllUsers)
router.get('/profile',authentication,profile)

module.exports=router;