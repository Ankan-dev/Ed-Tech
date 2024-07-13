const express=require('express');
const register=require('../controllers/teachers/createTeachers.js');
const {loginTeacher}=require('../controllers/teachers/loginTeachers.js');
const getAllTeachers = require('../controllers/teachers/getAllTeachers.js');
const logoutTeacher=require('../controllers/teachers/logoutTeachers.js');
const TeacherProfile = require('../controllers/teachers/teacherProfile.js');
const TeacherAuthorization=require('../middleware/TeacherAuth.js');


const router=express.Router();

router.post('/registerTeacher',register);
router.post('/loginTeacher',loginTeacher);
router.post('/logoutTeacher',TeacherAuthorization,logoutTeacher);
router.get('/allTEachers',getAllTeachers)
router.get('/TeacherProfile',TeacherAuthorization,TeacherProfile)

module.exports=router;