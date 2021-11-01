const dishHandler = require("../handlers/DishHandler");
const restaurantHandler = require("../handlers/RestaurantHandler");

exports.createDish = async (req, res) => {
  const data = req.body;
  try {
    const restaurant = await restaurantHandler.getRestById(data.restaurant);
    const dish = await dishHandler.createDishHandler(data, restaurant);
    await restaurantHandler.updateDishRest(restaurant, dish);
    res.json(dish);
  } catch (err) {
    res.json(err);
  }
};

exports.allDishes = async (req, res) => {
  const data = req.params;
  try {
    const response = await dishHandler.allDishesHandler(data);
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
