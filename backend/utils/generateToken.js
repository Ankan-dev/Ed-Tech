const jwt =require('jsonwebtoken')

const generateAccesssToken=(user)=>{
    const token=jwt.sign({id:user._id,email:user.email},process.env.JWT_ACCESS_TOKEN_SECRET);
    return token;
}

const generateRefreshToken=(user)=>{
    const token =jwt.sign({id:user._id,email:user.email},process.env.JWT_REFRESH_TOKEN_SECRET);
    return token;
}

module.exports={generateAccesssToken,generateRefreshToken};