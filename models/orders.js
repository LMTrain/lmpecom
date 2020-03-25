const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  memberId: { type: String, required: true }, 
  itemid: { type: String },
  item: { type: String },
  price: {type: Number},
  qty: {type: Number},
  link: {type: String},
  description: {type: String },
  thumbnail: {type: String },
  date: { type: Date, default: Date.now }
});

const orders = mongoose.model("orders", ordersSchema);

module.exports = orders;
