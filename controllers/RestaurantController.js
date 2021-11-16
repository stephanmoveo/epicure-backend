const restaurantHandler = require("../handlers/RestaurantHandler");

exports.createRestaurant = async (req, res) => {
  const data = req.body;
  try {
    await restaurantHandler.createRestaurant(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "Must Fill All Fields" });
  }
};

exports.allRestaurants = async (req, res) => {
  try {
    const response = await restaurantHandler.allRestaurantsHandler();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
exports.findRestaurantsWithDishes = async (req, res) => {
  try {
    const response = await restaurantHandler.findRestaurantsWithDishes();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
exports.findRestWithDishes = async (req, res) => {
  const data = req.params;
  try {
    const response = await restaurantHandler.findRestWithDishesHandler(data);
    res.json(response);
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.updateRestaurant = async (req, res) => {
  const data = req.body;
  try {
    await restaurantHandler.updateRestaurantHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};

exports.deleteRestaurant = async (req, res) => {
  const data = req.params;
  try {
    await restaurantHandler.deleteRestaurantHandler(data);
    res.json({ succses: true });
  } catch (err) {
    res.json({ error: "id not found" });
  }
};
