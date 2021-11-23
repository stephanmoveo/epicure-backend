const userHandler = require("../handlers/UserHandler");

exports.login = async (req, res, next) => {
  const data = req.body;
  console.log(data);

  try {
    const token = await userHandler.login(data);
    if(!token)
    return res.json({ succes: false});
    return res.json({ succes: true, token});
  } catch (err) {
    res.json(err);
  }
};
