const jwt =require('jsonwebtoken')

const generateToken=(user)=>{
    const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET);
    return token;
}

module.exports=generateToken;