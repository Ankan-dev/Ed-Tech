const user = require('../../models/user-model.js');
const bcrypt =require('bcrypt')

const register = async (req, res) => {
    const { fullname, email, password, teacherOrStudent, contact } = req.body;
    try {
        let checkUser = await user.findOne({ email });
        if (checkUser) {
            res.json({ message: "user already exists", success: false });
        } else {
            const hashPassword= await bcrypt.hash(password,10);
            let createUser = await user.create({ fullname, email, password:hashPassword, teacherOrStudent, contact });
            res.json({ message: "user created successfully", success: true });
        }

    } catch (error) {
        res.json({ "message": error.message });
    }
}

module.exports = register