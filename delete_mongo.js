const getdata = require("./mongodb_collection"); // import from mongodb_collection.js
// delete data from mongodb

const deletedata = async () => {
  let data = await getdata();
  let result = await data.deleteMany({ name: "m13" });
  console.log(result);
  if (result.acknowledged) {
    console.log("record is deleted");
  }
};
deletedata();
