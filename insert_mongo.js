// import connection from mongodb_collection.js
const getdata = require("./mongodb_collection");

const insert = async () => {
  const db = await getdata();
  const result = db.insertMany([
    {
      name: "m13",
      brand: "mi",
      price: 1500,
      catagory: "mobile",
    },
    {
      name: "m15",
      brand: "mi",
      price: 150,
      catagory: "mobile",
    },
    {
      name: "m16",
      brand: "mi",
      price: 100,
      catagory: "mobile",
    },
  ]); // for multiple data we create a array [{},{],{}] like this :
  if ((await result).acknowledged) {
    console.log("data inserted");
  }
};

insert();
