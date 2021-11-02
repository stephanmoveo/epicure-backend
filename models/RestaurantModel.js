const { Schema, model } = require("mongoose");

const restaurantModel = new Schema({
  name: { type: String, required: true, default: "" },
  image: { type: String, required: true, default: "" },
  chef: { type: Schema.Types.ObjectId, ref: "chef" },
  valid: { type: Boolean, required: true, default: true },
});

module.exports = model("restaurant", restaurantModel);
