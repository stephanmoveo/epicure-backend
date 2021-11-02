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
        valid: 0,
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

exports.findRestsWithDishesAggregation = (data) => {
  return [
    {
      '$match': {
        '_id': makeObjectId(data.id)
      }
    }, {
      '$lookup': {
        'from': 'dishes', 
        'let': {
          'the_valid': '$valid'
        }, 
        'pipeline': [
          {
            '$match': {
              '$expr': {
                '$and': [
                  {
                    '$eq': [
                      '$$the_valid', true
                    ]
                  }
                ]
              }
            }
          }
        ], 
        'as': 'dishes'
      }
    }, {
      '$project': {
        '__v': 0, 
        'valid': 0, 
        'dishes': {
          '__v': 0,
          'valid': 0
        }
      }
    }
  ];
};
