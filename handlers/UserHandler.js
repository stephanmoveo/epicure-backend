const userModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.login = async (data) => {
  const user = await userModel.findOne({
    userName: data.userName,
  });
  if (!(await user.comparePasswords(data.password))) {
    return false;
  } else {
    const userDetails = {
      user: user,
      token: jwt.sign(data.userName, process.env.TOKEN_SECRET),
    };
    return userDetails;
  }
};

// exports.login = async (data) => {
//   const hash = bcrypt.hashSync(data.password, saltRounds);
//   return userModel.create({
//     userName: data.userName,
//     password: hash,
//   });
// };
