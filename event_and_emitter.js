// node js ke ander butthon jaisa kuch nhi ban sakta buz yah brower ko suppoet nhi karta h
// agar hume yaha button jaisa kuch bhi banna h toh hume api ka use karna padega
const express = require("express");
const EventEmitter = require("events");
const app = express();

const event = new EventEmitter();
let count = 0;
event.on("countApi", () => {
  count++;
  console.log("event called", count);
});

app.get("/", (req, res) => {
  res.send("api caller");
  event.emit("countApi"); //event gonrated
});

app.get("/search", (req, res) => {
  res.send("api search caller");
  event.emit("countApi");
});

app.get("/uplaod", (req, res) => {
  res.send("api upload caller");
  event.emit("countApi");
});

app.listen(5000);


