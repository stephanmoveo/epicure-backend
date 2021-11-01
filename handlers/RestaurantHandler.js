const mongoose = require("mongoose");
const restaurantModel = require("../models/RestaurantModel");
const chefModel = require("../models/ChefModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createRestaurantHandler = async (data) => {
  const chef = await chefModel.findById({ _id: data.chef });
  const restaurant = await restaurantModel.create({
    name: data.name,
    image: data.image,
    chef: makeObjectId(chef._id),
  });
  await chef.updateOne({
    $push: { restaurants: restaurant },
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
  const chef = await chefModel.findById({ _id: data.chef });
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    { name: data.name, image: data.image, valid: data.valid }
  );
  await chef.updateOne({
    $push: { restaurants: restaurant },
  });
  return restaurant;
};

exports.deleteRestaurantHandler = async (data) => {
  const restaurant = await restaurantModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
  return restaurant;
};
