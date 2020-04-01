const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedItemsSchema = new Schema({
  itemid: { type: String },
  memberId: { type: String, required: true }, 
  item: { type: String },
  price: {type: Number},
  link: {type: String},
  thumbnail: {type: String },
  description: {type: String },
  rating: {type: String},
  date: { type: Date, default: Date.now }
});

const savedItems = mongoose.model("savedItems", savedItemsSchema);

module.exports = savedItems;
