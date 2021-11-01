const { Schema, model } = require("mongoose");

const chefModel = new Schema({
  firstName: { type: String, required: true, default: "" },
  lastName: { type: String, required: true, default: "" },
  image: { type: String, required: true, default: "" },
  description: { type: String, required: true, default: "" },
  restaurants: [{ type: Schema.Types.ObjectId, ref: "restaurant" }],
  valid: { type: Boolean, required: true, default: true },
});

module.exports = model("chef", chefModel);
