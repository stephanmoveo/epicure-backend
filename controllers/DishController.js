const dishHandler = require("../handlers/DishHandler");

exports.createDish = async (req, res) => {
  const data = req.body;
  try {
    const response = await dishHandler.createDishHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
