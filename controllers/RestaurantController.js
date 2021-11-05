const restaurantHandler = require("../handlers/RestaurantHandler");
const chefHandler = require("../handlers/ChefHandler");
exports.createRestaurant = async (req, res) => {
  const data = req.body;
  try {
    const restaurant = await restaurantHandler.createRestaurant(data);
    res.json(restaurant);
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
exports.findRestaurantsWithDishes = async(req,res)=>{
  try {
    const response = await restaurantHandler.findRestaurantsWithDishes();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
}
exports.findRestWithDishes = async (req, res) => {
  const data = req.params;
  try {
    const response = await restaurantHandler.findRestWithDishesHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

exports.updateRestaurant = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const restaurant = await restaurantHandler.updateRestaurantHandler(data);
    res.json(restaurant);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteRestaurant = async (req, res) => {
  const data = req.params;
  try {
    const response = await restaurantHandler.deleteRestaurantHandler(data);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};
