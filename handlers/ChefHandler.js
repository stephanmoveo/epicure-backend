const mongoose = require("mongoose");
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

exports.updateChefRest = async (chef, rest) => {
  await chef.updateOne({
    $push: { restaurants: rest },
  });
};

exports.getChefById = async (chefId) => {
  const chef = await chefModel.findById({ _id: chefId });
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

exports.updateChefHandler = async (data) => {
  const chef = await chefModel.findByIdAndUpdate(
    { _id: data.id },
    {
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
      description: data.description,
    }
  );
  return chef;
};

exports.deleteChefHandler = async (data) => {
  const chef = await chefModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
  return chef;
};





