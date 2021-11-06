const mongoose = require("mongoose");
const dishModel = require("../models/DishModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createDishHandler = async (data) => {
  console.log(data);
  const dish = await dishModel.create({
    name: data.name,
    image: data.image,
    description: data.description,
    typeIcon: data.typeIcon,
    price: data.price,
    restaurant: makeObjectId(data.restaurant),
  });

  return dish;
};

exports.allDishesHandler = async () => {
  const dishes = await dishModel
    .find({
      valid: true,
    })
    .select({ __v: 0 });

  return dishes;
};

exports.findDishHandler = async (data) => {
  const dish = dishModel.findById({ _id: data.id });
  return dish;
};

exports.updateDishHandler = async (data) => {
  console.log(data);
  const dish = await dishModel.findByIdAndUpdate(
    { _id: data.id },
    {
      name: data.name,
      image: data.image,
      description: data.description,
      typeIcon: data.typeIcon,
      price: data.price,
      valid: data.isvalid,
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
