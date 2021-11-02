const mongoose = require("mongoose");
const RestaurantModel = require("../models/RestaurantModel");
const restaurantModel = require("../models/RestaurantModel");
const makeObjectId = mongoose.Types.ObjectId;
const {
  findRestsWithDishesAggregation,
} = require("./Aggregations/Aggregations");


exports.createRestaurant = async (data, chef) => {
  const restaurant = await restaurantModel.create({
    name: data.name,
    image: data.image,
    chef: makeObjectId(data.chefId),
    valid: data.valid,
  });
  return restaurant;
};

exports.allRestaurantsHandler = async () => {
  const allRestaurants = await restaurantModel.find({ valid: true });
  return allRestaurants;
};

exports.findRestWithDishesHandler = async (data) => {
  const aggregation = findRestsWithDishesAggregation(data);
  const restaurant = await RestaurantModel.aggregate(aggregation);
  return restaurant;
};

exports.updateRestaurantHandler = async (data) => {
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    {
      name: data.name,
      image: data.image,
      chef: makeObjectId(data.chefId),
      valid: data.valid,
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

