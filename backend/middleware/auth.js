const user=require('../models/user-model.js');
const jwt =require('jsonwebtoken');

const authentication = async(req,res,next)=>{

    const token=req.header("Auth");
    if(!token){
        res.json({loginStatus:false});
    }else{
        const decoded=jwt.verify(token,"^&$*$%@&^");
        const id=decoded.userId;
        const User= await user.findById(id);
        if(!User){
            res.json({message:"user not found",success:false});
        }else{
            req.user=User;
            next();
        }
    }

}

module.exports=authentication;