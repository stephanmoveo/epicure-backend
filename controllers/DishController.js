const dishHandler = require("../handlers/DishHandler");

exports.createDish = async (req, res) => {
  const data = req.body;
  try {
    await dishHandler.createDishHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "Must Fill All Fields" });
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
    res.json({ error: "id not found" });
  }
};

exports.updateDish = async (req, res) => {
  const data = req.body;
  try {
    await dishHandler.updateDishHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.deleteDish = async (req, res) => {
  const data = req.params;
  try {
    await dishHandler.deleteDishHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};
