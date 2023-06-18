const mongoose = require("mongoose");
const validator = require("validator");
// name, email, password, confirmPassword, photo
console.log(validator.isEmail("ashwai"));
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email."],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "Please enter a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please enter a password."],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password."],
    validate : {
      validator : function(val){
        return val == this.password;
      },
      message : "Password & confirm Password does not match"
    }
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
