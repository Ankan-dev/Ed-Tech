const teacherModel = require('../../models/teacher-model.js');

const logoutTeacher= async(req,res)=>{

    const Teacher=req.teacherModel;
    try{

        await teacherModel.findByIdAndUpdate(
            Teacher.id,
            {
                $set:{
                    refreshToken:undefined
                }
            },
            {
                new:true
            }
        )

        const options={
            httpOnly:true,
            secure:true
        }

        res
        .status(200)
        .clearCookie("AccessToken",options)
        .clearCookie("RefreshToken",options)
        .json({
            message:"Teacher logged out successfully",
            success:true
        })

    }catch(error){
        return res.json({
            message:error.message,
            success:false
        })
    }
}

module.exports=logoutTeacher