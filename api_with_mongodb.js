const express = require("express");
const getdata = require("./mongodb_collection"); // import from mongodb_collection.js
const mongodb = require("mongodb");
const app = express();

// req=jb hume api se data get karna ho
// res= brower ko response karne ke liye
app.use(express.json());
// postman pr data ko read karne from mongodb
app.get("/", async (req, res) => {
  let data = await getdata();
  data = await data.find().toArray();
  res.send(data);
});

// enter the data postman to mongodb
app.post("/", async (req, res) => {
  let data = await getdata();
  let result = await data.insertOne(req.body);
  //   console.log(result);
  res.send(result);
});

// update the data of mongodb using postman
app.put("/", async (req, res) => {
  let data = await getdata();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  res.send({ result: "updated" });
});

// delete api data from mongodb using post man

app.delete("/:id", async (req, res) => {
  let data = await getdata();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id), //mpngodb se object ki id copy karke postman header pr copy karenge
  });
  res.send(result);
});

app.listen(5000);
