const teacherModel = require('../../models/teacher-model.js');
const { comparePassword } = require('../../utils/hashPassword.js');
const { generateAccesssToken,generateRefreshToken } = require('../../utils/generateToken.js');

const generateAccessAndRefreshToken = async (Teacher) => {
    const AccessToken = generateAccesssToken(Teacher);
    const RefreshToken = generateRefreshToken(Teacher);
    Teacher.refreshToken = RefreshToken; // Assign the refresh token to the Teacher document
    await Teacher.save({ validateBeforeSave: false }); // Save the updated Teacher document
    return { AccessToken, RefreshToken };
}

const loginTeacher = async (req, res) => {
    const { email, password } = req.body;
    if (!(email || password)) {
        return res
            .json({
                message: "Enter the credentials",
                success: false
            });
    }
    try {
        const Teacher = await teacherModel.findOne({ email });
        if (!Teacher) {
            return res
                .status(404)
                .json({
                    message: "User not found",
                    success: false
                });
        }

        const validatePassword = await comparePassword(password, Teacher.password);
        if (!validatePassword) {
            return res.json({
                message: "Incorrect Password",
                success: false
            });
        }

        const { AccessToken, RefreshToken } = await generateAccessAndRefreshToken(Teacher);

        const options = {
            httpOnly: true,
            secure: true
        };

        res
            .status(200)
            .cookie("AccessToken", AccessToken, options)
            .cookie("RefreshToken", RefreshToken, options)
            .json({ message: `Welcome ${Teacher.fullname}`, success: true });

    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

module.exports = { loginTeacher };