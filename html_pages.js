const express = require("express");
const path = require("path"); //directory ke folder ko access karta h

const app = express();
const publicpath = path.join(__dirname, "public");

app.use(express.static(publicpath)); //static contect ko load karta

// remove file extention from url
// like home.html == home;
// yeh hum isliye karte h ki humari security bani rhe aur views or users ko yeh na patta chlae ki yeh kis language ko use karke likhi gyi h

// set engine :
app.set("view engine", "ejs");

// app.get("", (req, res) => {
//   res.sendFile(`${publicpath}/home.html`);
// });

// app.get("/about", (req, res) => {
//   // yaha hum about ki place pr kuch bhi rakh sakte h
//   res.sendFile(`${publicpath}/about.html`);
// });

// app.get("*", (req, res) => {
//   // yaha hum about ki place pr kuch bhi rakh sakte h
//   res.sendFile(`${publicpath}/404.html`);
// });

//  ejs rander (dynamic pages)
app.get("/profile", (req, res) => {
  const user = {
    name: "muskan",
    email: "muskan184",
    city: "suart",
    skills: ["php", "pyhton", "js", "c++"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.listen(5000);
// create a 404 page when user enter wrong url
