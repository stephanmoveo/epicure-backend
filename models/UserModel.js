const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = new Schema({
  userName: { type: String, required: true, default: "" },
  password: { type: String, required: true, default: "" },
  admin: { type: Boolean, required: false },
});

userModel.methods.comparePasswords = function (password) {
    return bcrypt.compare(password, this.password)
}

module.exports = model("user", userModel);
