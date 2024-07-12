const user = require('../../models/user-model.js');
const { generateAccesssToken } = require('../../utils/generateToken.js');
const { generateRefreshToken } = require('../../utils/generateToken.js');
const { comparePassword } = require('../../utils/hashPassword.js');
const jwt = require('jsonwebtoken');

const generateAcessAndRefreshToken = async (user) => {
    const AccessToken = generateAccesssToken(user);
    const RefreshToken = generateRefreshToken(user);
    user.refreshToken = RefreshToken;
    await user.save({ validateBeforeSave: false })
    return { AccessToken, RefreshToken };
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.json({ message: "Enter the correct fields", status: false });
        }
        const checkUser = await user.findOne({ email });
        if (!checkUser) {
            res.json({ message: "User dosen't exists", success: false });
        } else {
            const validPassword = await comparePassword(password, checkUser.password);
            if (!validPassword) {
                res.json({ message: "Wrong password", success: false });
            } else {
                const { AccessToken, RefreshToken } = await generateAcessAndRefreshToken(checkUser);
                const options = {
                    httpOnly: true,
                    secure: true
                }

                res
                    .status(200)
                    .cookie("AccessToken", AccessToken, options)
                    .cookie("RefreshToken", RefreshToken, options)
                    .json({ message: `Welcome ${checkUser.fullname}`, success: true });
            }
        }
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

const refreshAccess = async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken;
    if (!incomingRefreshToken) {
        return res.json({
            message: "Refresh Token Missing",
            success: false
        })
    }
    const decode = jwt.verify(incomingRefreshToken, process.env.JWT_REFRESH_TOKEN_SECRET);

    const User = user.findOne(decode?.id);
    if (!User) {
        return res.json({
            message: "invalid Token",
            success: false
        })
    }

    if (incomingRefreshToken !== User.refreshToken) {
        return json.res({
            message: "invalid refresh Token",
            success: false
        })
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    const { AccessToken, RefreshToken } = await generateAcessAndRefreshToken(User);

    res
        .status(200)
        .cookie("AccessToken", AccessToken, options)
        .cookie("RefreshToken", RefreshToken, options)
        .json({ message: `${User.fullname}, your tokens are renewed`, success: true });

}

module.exports = { login, refreshAccess };