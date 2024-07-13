const user = require('../models/user-model.js');
const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) => {

    try {
        const token = req.cookies?.AccessToken;
        
        if (!token) {
            return res.json({
                message: "Missing Token",
                success: false
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

        const User = await user.findById(decoded?.id).select("-password -refreshToken");

        if (!User) {
            return res.json({
                message: "user dosen't exists",
                success: false
            })
        }

        req.user = User;
        next();
    } catch (error) {
        return res.json({
            message: error.message,
            success: false
        })
    }

}

module.exports = authentication;