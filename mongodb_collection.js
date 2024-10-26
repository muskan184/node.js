// import mongodb
const { MongoClient } = require("mongodb"); // mordern way
// or
// const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017";
const client = new MongoClient(url); // fetch data from mongodb

module.exports = async function getdata() {
  let result = await client.connect();
  let db = result.db("e-comm"); // database name
  return db.collection("products"); // table name
  //   let response = await collect.find({}).toArray();
  //   let response = await collect.find({ name: "m14" }).toArray(); // for specific data
  //   console.log(response);
};

// this is file use in other files
// module.exports = getdata;

// exports default getdata;
