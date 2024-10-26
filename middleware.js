const express = require("express");
const app = express();

// application -level  middleware = ager hume sare route pr middleware apply karn ah toh uska use karenge
//  agar specific pr karna h toh route -level ka use karenge

const reqfilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please enter the age");
  }
  // create a middleware
  else if (req.query.age < 18) {
    res.send("you are not able to access this page");
  } else {
    next(); // allow to go next page
  }
};

app.use(reqfilter); //able to use

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

app.get("/users", (req, resp) => {
  resp.send("welcome to users page");
});

app.listen(5000);
