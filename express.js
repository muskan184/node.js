// frame work of node work
// make api simply
// routing simple
// time save then  node

const { request } = require("express");

const express = require("express");
const app = express(); //ecxucated state

// app.get("", (req, res) => {
//   res.send("this is home page");
// });

// app.get("/about", (req, res) => {
//   res.send("this is about page");
// });

// app.get("/help", (req, res) => {
//   res.send("this is help page");
// });
// // get,post this thing provide a route
// app.listen(5000); //localhost

// using reques
app.get("", (req, res) => {
  console.log("the user name is ", req.query.name);
  res.send("welcome" + req.query.name);
});

app.listen(5000);
