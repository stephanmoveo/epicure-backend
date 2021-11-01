const mongoose = require("mongoose");
const dishModel = require("../models/DishModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createDishHandler = async (data, restaurant) => {
  const dish = await dishModel.create({
    name: data.name,
    image: data.image,
    description: data.description,
    typeIcon: data.typeIcon,
    price: data.price,
    restaurant: makeObjectId(restaurant._id),
  });

  return dish;
};

exports.allDishesHandler = async (data) => {
  const dishes = await dishModel.find();
  return dishes;
};

exports.updateDishHandler = async (data) => {
  const dish = await dishModel.findByIdAndUpdate(
    { _id: data.id },
    {
      name: data.name,
      image: data.image,
      description: data.description,
      typeIcon: data.typeIcon,
      price: data.price,
    }
  );

  return dish;
};

exports.deleteDishHandler = async (data) => {
  const dish = await dishModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
  return dish;
};
