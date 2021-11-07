const mongoose = require("mongoose");
const ChefModel = require("../models/ChefModel");
const restaurantModel = require("../models/RestaurantModel");
const makeObjectId = mongoose.Types.ObjectId;
const {
  findRestsWithDishesAggregation,
} = require("./Aggregations/Aggregations");
const { findAllRestaurantsWithDishes } = require("./Aggregations/Aggregations");

exports.createRestaurant = async (data, chef) => {
  const restaurant = await restaurantModel.create({
    name: data.name,
    image: data.image,
    chef: makeObjectId(data.chefId),
    valid: true,
  });
  return restaurant;
};

exports.allRestaurantsHandler = async () => {
  const allRestaurants = await restaurantModel
    .find({ valid: true })
    .select({ __v: 0, valid: 0 })
    .populate({
      path: "chef",
      select: { __v: 0, valid: 0, description: 0, image: 0 },
    });
  return allRestaurants;
};

exports.findRestaurantsWithDishes = async () => {
  const aggregation = findAllRestaurantsWithDishes();
  const restaurants = await restaurantModel.aggregate(aggregation);
  return restaurants;
};

exports.findRestWithDishesHandler = async (data) => {
  const aggregation = findRestsWithDishesAggregation(data);
  const restaurant = await restaurantModel.aggregate(aggregation);
  return restaurant;
};

exports.updateRestaurantHandler = async (data) => {
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    {
      name: data.name,
      image: data.image,
      // chef: makeObjectId(data.chefId)
    }
  );
  return restaurant;
};

exports.deleteRestaurantHandler = async (data) => {
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
  return restaurant;
};
