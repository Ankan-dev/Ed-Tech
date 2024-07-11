const user = require('../../models/user-model.js');
const {generateAccesssToken}=require('../../utils/generateToken.js');
const {generateRefreshToken}=require('../../utils/generateToken.js');
const {comparePassword} =require('../../utils/hashPassword.js');

const generateAcessAndRefreshToken= async (user)=>{
    const AccessToken=generateAccesssToken(user);
    const RefreshToken=generateRefreshToken(user);
    user.refreshToken=RefreshToken;
    await user.save({validateBeforeSave:false})
    return {AccessToken,RefreshToken};
}

const login= async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.json({message:"Enter the correct fields",status:false});
        }
        const checkUser= await user.findOne({email});
        if(!checkUser){
            res.json({message:"User dosen't exists",success:false});
        }else{
            const validPassword=await comparePassword(password,checkUser.password);
            if(!validPassword){
                res.json({message:"Wrong password",success:false});
            }else{
                const {AccessToken,refreshToken}= await generateAcessAndRefreshToken(checkUser);
                const options={
                    httpOnly:true,
                    secure:true
                }
                
                res
                .status(200)
                .cookie("AccessToken",AccessToken,options)
                .cookie("RefreshToken",refreshToken,options)
                .json({message:`Welcome ${checkUser.fullname}`,success:true});
            }
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=login;