const { Schema, model } = require("mongoose");

const restaurantModel = new Schema({
  name: { type: String, required: true, default: "" },
  image: { type: String, required: true, default: "" },
  chef: { type: Schema.Types.ObjectId, ref: "chef" },
  valid: { type: Boolean, required: true, default: true },
  phoneNmuber: { type: String },
  openingHours: { type: String },
  address:{ type: String },
});

module.exports = model("restaurant", restaurantModel);
