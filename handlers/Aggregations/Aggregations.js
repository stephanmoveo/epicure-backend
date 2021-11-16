const mongoose = require("mongoose");
const makeObjectId = mongoose.Types.ObjectId;

exports.findChefAndRestsAgregation = (data) => {
  return [
    {
      $match: {
        chef: makeObjectId(data.id),
      },
    },
    {
      $project: {
        __v: 0,
      },
    },
    {
      $group: {
        _id: "$chef",
        rests: {
          $push: "$$ROOT",
        },
      },
    },
    {
      $lookup: {
        from: "chefs",
        localField: "_id",
        foreignField: "_id",
        as: "chefObject",
      },
    },
    {
      $unwind: {
        path: "$chefObject",
      },
    },
    {
      $project: {
        chefObject: {
          __v: 0,
          valid: 0,
        },
      },
    },
    {
      $project: {
        chef: "$chefObject",
        _id: 0,
        restaurants: "$rests",
      },
    },
  ];
};
exports.findAllRestaurantsWithDishes = () => {
  return [
    {
      $match: {
        valid: true,
      },
    },
    {
      $lookup: {
        from: "dishes",
        localField: "_id",
        foreignField: "restaurant",
        as: "dishes",
      },
    },
    {
      $match: {
        "dishes.valid": true,
      },
    },
    {
      $project: {
        __v: 0,
        valid: 0,
        dishes: {
          __v: 0,
        },
      },
    },
  ];
};
exports.findRestsWithDishesAggregation = (data) => {
  return [
    {
      $match: {
        _id: makeObjectId(data.id),
      },
    },
    {
      $lookup: {
        from: "dishes",
        localField: "_id",
        foreignField: "restaurant",
        as: "dishes",
      },
    },
    {
      $project: {
        __v: 0,
        valid: 0,
        dishes: {
          __v: 0,
          valid: 0,
        },
      },
    },
  ];
};
