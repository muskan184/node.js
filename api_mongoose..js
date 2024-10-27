const express = require("express");
require("./mongoose_connection.js");
const product = require("./product_sch_mongoose.js");

const app = express();
app.use(express.json()); // convert data into json
app.post("/create", async (req, res) => {
  let data = new product(req.body);
  let result = await data.save();
  res.send("done");
});

app.get("/list", async (req, res) => {
  let data = await product.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);
  res.send("done");
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await product.updateOne(
    req.params,

    { $set: req.body }
  );
  res.send("done");
});

// write a data in post man
app.listen(6000);
