const mongoose = require("mongoose");
const dishModel = require("../models/DishModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createDishHandler = async (data) => {
  return await dishModel.create({
    name: data.name,
    image: data.image,
    description: data.description,
    typeIcon: data.typeIcon,
    price: data.price,
    restaurant: makeObjectId(data.restaurant),
  });
};

exports.allDishesHandler = async () => {
  return await dishModel
    .find({
      valid: true,
    })
    .select({ __v: 0 });
};

exports.findDishHandler = async (data) => {
  return await dishModel.findById({ _id: data.id }).select({ __v: 0 });
};

exports.updateDishHandler = async (data) => {
  return await dishModel
    .findByIdAndUpdate(
      { _id: data.id },
      {
        name: data.name,
        image: data.image,
        description: data.description,
        typeIcon: data.typeIcon,
        price: data.price,
        valid: data.isvalid,
      }
    )
    .select({ __v: 0 });
};

exports.deleteDishHandler = async (data) => {
  return await dishModel.findByIdAndUpdate({ _id: data.id }, { valid: false });
};
