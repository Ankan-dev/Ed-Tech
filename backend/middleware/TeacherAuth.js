const jwt = require('jsonwebtoken');
const teacherModel = require('../models/teacher-model');
const { model } = require('mongoose');

const TeacherAuthorization = async (req, res, next) => {
    const token = req.cookies?.AccessToken;

    if (!token) {
        return res.json({
            message: "Missing Token",
            success: false
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
        const teacher = await teacherModel.findById(decoded.id).select("-password -refreshToken");
        if (!teacher) {
            return res.json({
                message: "user dosen't exists",
                success: false
            })
        }

        req.teacherModel = teacher;
        next()
    }
    catch(error){
        return res.json({
            message: error.message,
            success: false
        })
    }
}

module.exports = TeacherAuthorization;