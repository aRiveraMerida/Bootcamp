const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dishSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    vegan: { type: Boolean, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dish", dishSchema);
