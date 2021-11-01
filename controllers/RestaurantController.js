const restaurantHandler = require("../handlers/RestaurantHandler");

exports.createRestaurant = async (req, res) => {
  const data = req.body;
  try {
    const response = await restaurantHandler.createRestaurantHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
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
