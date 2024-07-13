const teacherModel = require('../../models/teacher-model.js');

const TeacherProfile= async(req,res)=>{
    const teacher=req.teacherModel;
    if(!teacher){
        return res.json({
            message:"Login first",
            success:false

        })

    }
    const details=await teacherModel.findById(teacher.id).select("-password -refreshToken");
    if(!details){
        return res
        .status(404)
        .json({
            message:"user not found",
            success: false
        })
    }

    return res
    .status(200)
    .json({
        "teacher":details,
        success:true
    })
}

module.exports=TeacherProfile;