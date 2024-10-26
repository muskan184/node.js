module.exports = reqfilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please enter the age");
  }
  // create a middleware
  else if (req.query.age < 18) {
    res.send("you are not able to access this page");
  } else {
    next();
  }
};

//   we can use this route level middleware in any section of another page
