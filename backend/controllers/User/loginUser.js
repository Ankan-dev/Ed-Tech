const user = require('../../models/user-model.js');
const bcrypt =require('bcrypt')

const login= async(req,res)=>{
    const {email,password}=req.body;
    try{
        const checkUser= await user.findOne({email});
        if(!checkUser){
            res.json({message:"User dosen't exists",success:false});
        }else{
            const validPassword=await bcrypt.compare(password,checkUser.password);
            if(!validPassword){
                res.json({message:"Wrong password",success:false});
            }else{
                res.json({message:`Welcome ${checkUser.fullname}`,success:true});
            }
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=login;