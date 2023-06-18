const User = require('./../models/userModel');
const asyncErrorHandler = require("express-async-handler")

const registerUser = asyncErrorHandler(async (req, res, next) =>{
    const newUser = await User.create(req.body);

    res.status(201).json({
        status : "success",
        data : {
            user : newUser
        }
    })
})

module.exports = {registerUser};