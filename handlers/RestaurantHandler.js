const mongoose = require("mongoose");
const restaurantModel = require("../models/RestaurantModel");
const makeObjectId = mongoose.Types.ObjectId;
const {
  findRestsWithDishesAggregation,
} = require("./Aggregations/Aggregations");
const { findAllRestaurantsWithDishes } = require("./Aggregations/Aggregations");
const { restaurantDetailsCrawler } = require("./Crawlers/RestCrawler");

exports.createRestaurant = async (data) => {
  try {
    // const res = await restaurantDetailsCrawler(data.name);
    return await restaurantModel.create({
      name: data.name,
      image: data.image,
      chef: makeObjectId(data.chefId),
      valid: true,
      // phoneNmuber: res.phoneNumber,
      // openingHours: res.tableHours,
      // address: res.address,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.allRestaurantsHandler = async () => {
  return await restaurantModel
    .find({ valid: true })
    .select({ __v: 0, valid: 0 })
    .populate({
      path: "chef",
      select: { __v: 0, valid: 0, description: 0, image: 0 },
    });
};

exports.findRestaurantsWithDishes = async () => {
  const aggregation = findAllRestaurantsWithDishes();
  return await restaurantModel.aggregate(aggregation);
};

exports.findRestWithDishesHandler = async (data) => {
  const aggregation = findRestsWithDishesAggregation(data);
  return await restaurantModel.aggregate(aggregation);
};

exports.updateRestaurantHandler = async (data) => {
  return await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    {
      name: data.name,
      image: data.image,
      chef: makeObjectId(data.chefId),
    }
  );
};

exports.deleteRestaurantHandler = async (data) => {
  return await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
};
