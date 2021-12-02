const userModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

exports.login = async (data) => {
  const user = await userModel
    .findOne({
      userName: data.userName,
    })
    .select({ __v: 0});
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
