const mongoose = require("mongoose");
const restaurantModel = require("../models/RestaurantModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createRestaurant = async (data, chef) => {
  const restaurant = await restaurantModel.create({
    name: data.name,
    image: data.image,
    chef: makeObjectId(chef._id),
  });
  return restaurant;
};

exports.allRestaurantsHandler = async () => {
  const allRestaurants = await restaurantModel
    .find({ valid: true })
    .select({ __v: 0 })
    .populate([
      { path: "dishes", select: { __v: 0, restaurant: 0 } },
      {
        path: "chef",
        select: { description: 0, restaurants: 0, __v: 0, image: 0 },
      },
    ])
    .exec();
  return allRestaurants;
};

exports.updateRestaurantHandler = async (data) => {
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    { name: data.name, image: data.image, valid: data.valid }
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

exports.getRestById = async (restId) => {
  const restaurant = await restaurantModel.findById({ _id: restId});
  return restaurant;
};

exports.updateDishRest = async (rest, dish) => {
  await rest.updateOne({
    $push: { dishes: dish },
  });
};