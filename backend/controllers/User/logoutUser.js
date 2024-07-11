const user = require('../../models/user-model.js');

const logOutUser= async(req,res)=>{

    try{
        const User=req.user;
        await user.findByIdAndUpdate(
            User,
            {
                $set:{
                    refreshToken:undefined
                }
            },
            {
                new:true
            }
        );
        const options={
            httpOnly:true,
            secure:true
        }

        res
        .status(200)
        .clearCookie("AccessToken",options)
        .clearCookie("RefreshToken",options)
        .json({
            message:"user logged out successfully",
            status:success
        })
    }catch(error){
        return res.json({
            message:error.message,
            success:false
        })
    }

}

module.exports=logOutUser;