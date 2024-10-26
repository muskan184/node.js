// pages pr html and json ke (const express = require("express");
const express = require("express");
const app = express(); //ecxucated state

app.get("", (req, res) => {
  res.send(`<h1>this is home page</h1><a href="/about" >go to about page</a>`); // link to another page
});

app.get("/about", (req, res) => {
  res.send(`
    <input type='text' placeholder='enter your name' value =${req.query.name}/>// input feild me number aa gya 

    <button> click me </button>`);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "muskan",
      email: "muskandubey184",
    },
    {
      name: "muskan",
      email: "muskandubey184",
    },
    {
      name: "muskan",
      email: "muskandubey184",
    },
  ]); //json data
});
// get,post this thing provide a route
app.listen(5000); //localhostdata
