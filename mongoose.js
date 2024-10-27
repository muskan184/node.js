// crud operation with mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm"); // path of table from mongodb

// create a schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  catagory: String,
  // jitne hi feild yaha enter karege utne entry hogi
});

// save,insert table

const saveIndb = async () => {
  const product = mongoose.model("products", productSchema);
  let data = new productsModel({
    name: "m20",
    price: 30000,
    brand: "xyz",
    catagory: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
// saveIndb();
// update table

const updateIndb = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.updateOne(
    { name: "max5" },
    { $set: { price: 20, name: "m44" } }
  );
  console.log(data);
};
// updateIndb();

// delete table

const deleteIndb = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.deleteOne({ name: "m44" });
  console.log(data);
};

// deleteIndb();

// find a data

const findIndb = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.find();
  console.log(data);
};

findIndb();
// Schema := yeh humre data feild ko validate karti h condition apply karne me help karti h
// model := module schema ka use karke mongodb aur node js ko connect karta h..
