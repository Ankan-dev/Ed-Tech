const user = require('../../models/user-model.js');
const {hashPassword} =require('../../utils/hashPassword.js');


const register = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {

        if(!fullname && !email && !password ){
            return res.json({message:"Enter all the details",success:false});
        }
        let checkUser = await user.findOne({ 
            email
         });
        if (checkUser) {
            res.json({ message: "user already exists", success: false });
        } else {
            const hash = await hashPassword(password);
            let createUser = await user.create({ fullname, email, password:hash });
            if(createUser){ 
                              
                res.json({ message: "user created successfully", success: true });
            }else{
                res.json({ message: "user can't be created", success: false });
            }
        }

    } catch (error) {
        res.json({ "message": error.message });
    }
}

module.exports = register