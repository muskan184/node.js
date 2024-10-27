// create a schema for mongodb
// product is a table/collection name

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  catagory: String,
});
module.exports = mongoose.model("products", productSchema);
