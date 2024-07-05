const teacher = require('../../models/teacher-model.js');
const hashPassword = require('../../utils/hashPassword.js');

const createTeacher = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const checkTeacher = await teacher.findOne({ email });
        if (checkTeacher) {
            return res.json({ message: "Teacher already exists", success: false });
        }
        const hash = await hashPassword(password);  // Ensure you await the hashing function
        const newTeacher = await teacher.create({ fullname, email, password: hash });  // Use a different variable name
        if (newTeacher) {
            res.json({ message: "Teacher created", success: true });
        } else {
            res.json({ message: "Teacher not created", success: false });
        }
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

module.exports = createTeacher;
