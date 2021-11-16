const chefModel = require("../models/ChefModel");
const restaurantModel = require("../models/RestaurantModel");
const { findChefAndRestsAgregation } = require("./Aggregations/Aggregations");

exports.createChefHandler = async (data) => {
  return await chefModel.create({
    firstName: data.firstName,
    lastName: data.lastName,
    image: data.image,
    description: data.description,
  });
};

exports.findChefHandler = async (data) => {
  const aggregation = findChefAndRestsAgregation(data);
  return await restaurantModel.aggregate(aggregation);
};

exports.updateChefHandler = async (data) => {
  return await chefModel.findByIdAndUpdate(
    { _id: data.id },
    {
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
      description: data.description,
    }
  );
};

exports.deleteChefHandler = async (data) => {
  const chef = await chefModel.findByIdAndUpdate(
    { _id: data.id },
    { valid: false }
  );
  const rests = await restaurantModel.updateMany(
    { chef: data.id },
    {
      valid: false,
    }
  );
  return chef;
};

exports.allChefs = async () => {
  return await chefModel.find({ valid: true }).select({ valid: 0, __v: 0 });
};
