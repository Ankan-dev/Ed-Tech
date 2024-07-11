const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword;
}


const comparePassword= async (receivedPassword,userPassword)=>{
    return await bcrypt.compare(receivedPassword,userPassword);
}
module.exports = {hashPassword,comparePassword};
