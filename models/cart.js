const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  memberId: { type: String, required: true }, 
  itemid: { type: String },
  item: { type: String },
  price: {type: Number},
  qty: {type: Number},
  link: {type: String},
  description: {type: String },
  thumbnail: {type: String },
  rating: {type: String},
  date: { type: Date, default: Date.now }
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
