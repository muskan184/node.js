// connect mongodb connection from other connection file
const getdata = require("./mongodb_collection");

//  this code for read a code from mongodb

// getdata().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     }); //to array  return promisees
// });

// or

const main = async () => {
  let data = await getdata();
  data = await data.find().toArray();
  console.log(data);
};
//  hum more than one database se (connection)

main();
