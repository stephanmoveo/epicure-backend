const chefHandler = require("../handlers/ChefHandler");

exports.createChef = async (req, res) => {
  const data = req.body;
  try {
    const response = await chefHandler.createChefHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

exports.findChef = async (req, res) => {
  const data = req.params;
  try {
    const response = await chefHandler.findChefHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
