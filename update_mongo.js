const { name } = require("ejs");
const getdata = require("./mongodb_collection"); // import from mongodb_collection.js

const updatedata = async () => {
  let data = await getdata();
  let result = await data.updateOne(
    { name: "m14" },
    {
      $set: { name: "max5", price: 5000 },
    }
  );
  console.log(result);
};
updatedata();
