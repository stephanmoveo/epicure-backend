const mongoose = require("mongoose");
const restaurantModel = require("../models/RestaurantModel");
const dishModel = require("../models/DishModel");
const makeObjectId = mongoose.Types.ObjectId;

exports.createDishHandler = async (data) => {
  const restaurant = await restaurantModel.findById({
    _id: data.restaurant,
  });
  const dish = await dishModel.create({
    name: data.name,
    image: data.image,
    description: data.description,
    typeIcon: data.typeIcon,
    price: data.price,
    restaurant: makeObjectId(restaurant._id),
  });
  await restaurant.updateOne({
    $push: { dishes: dish },
  });
  return dish;
};
