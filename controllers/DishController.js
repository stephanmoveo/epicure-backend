const dishHandler = require("../handlers/DishHandler");

exports.createDish = async (req, res) => {
  const data = req.body;
  try {
    const dish = await dishHandler.createDishHandler(data);
    res.json({dish, succses:true});
  } catch (err) {
    res.json(err);
  }
};

exports.allDishes = async (req, res) => {
  try {
    const response = await dishHandler.allDishesHandler();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

exports.findDish = async (req, res) => {
  const data = req.params;

  try {
    const response = await dishHandler.findDishHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

exports.updateDish = async (req, res) => {
  const data = req.body;
  try {
    const response = await dishHandler.updateDishHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteDish = async (req, res) => {
  const data = req.params;
  try {
    const response = await dishHandler.deleteDishHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
