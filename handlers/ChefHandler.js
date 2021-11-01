const mongoose = require("mongoose");
const restaurantModel = require("../models/RestaurantModel");
const chefModel = require("../models/ChefModel");

exports.createChefHandler = async (data) => {
  const chef = await chefModel.create({
    firstName: data.firstName,
    lastName: data.lastName,
    image: data.image,
    description: data.description,
    restaurants: data.restaurants,
  });
  return chef;
};

exports.findChefHandler = async (data) => {
  const chef = await chefModel
    .find({
        lastName: data.lastName,
    })
    .select({ __v: 0 })
    .populate({
      path: "restaurants",
      select: { name: 1, image: 1 }, 
    })
    .exec();
  return chef;
};
