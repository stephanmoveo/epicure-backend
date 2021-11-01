const { Schema, model } = require("mongoose");

const dishModel = new Schema({
  name: { type: String, required: true, default: "" },
  image: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  typeIcon: { type: Object},
  price: { type: String, required: true, default: "" },
  restaurant: { type: Schema.Types.ObjectId, ref: "restaurant" },
  valid: { type: Boolean, required: true, default: true },
});

module.exports = model("dish", dishModel);
