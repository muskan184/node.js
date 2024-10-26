// routre level middleware ek route ,group of route aur total route pr bhi lga sakte h

const express = require("express");
const reqfilter = require("./middleawre_quary.js"); // we you route middleware in other page
const app = express();
const route = express.Router();

// application -level  middleware = ager hume sare route pr middleware apply karn ah toh uska use karenge
//  agar specific pr karna h toh route -level ka use karenge

// app.use(reqfilter); //able to use
route.use(reqfilter);
app.get("/", (req, resp) => {
  resp.send("welcome to home page"); // not use middle for this
});

app.get("/users", reqfilter, (req, resp) => {
  // we can use middleware only for specific route but ese hr line ke liye lgana ho toh bahut hard hoga
  resp.send("welcome to users page");
});

route.get("/about", (req, resp) => {
  resp.send("welcome to about page"); // not use middle for this
});

app.get("/contact", (req, resp) => {
  resp.send("welcome to contact page"); // not use middle for this
});

app.use("./", route);
// the solution is:

app.listen(5000);
