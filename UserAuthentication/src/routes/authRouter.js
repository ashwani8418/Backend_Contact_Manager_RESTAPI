const express = require("express");
const router = express.Router();
const authController = require('./../Controller/authController')

router.route('/register').post(authController.registerUser);

module.exports = router;