// const fs = require("fs");
// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// }
// else{
//     console.log('ivaild out put')
// }

// create a file in folder
// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname, "files"); //show current directory
// // for (i = 0; i <= 4; i++) {
// //   fs.writeFileSync(dirpath + "/hello" + i + ".txt", "a simple text file");
// // }

// // read a file
// fs.readdir(dirpath, (err, files) => {
//   // console.warn(files);
//   // or
//   files.forEach((num) => {
//     console.log(num);
//   });
// });

// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname, "crud");
// const filepath = `${dirpath}/apple.txt`;

// fs.writeFileSync(file, "this is text file");

// read a file
// fs.readFile(filepath, "utf-8", (err, item) => {
//   console.log(item);
// });

// update file
// fs.appendFile(filepath, "\t this file name is apple.txt", (err) => {
//   if (!err) {
//     console.log("file is appdated");
//   }
// });

// rename file
// fs.rename(filepath, `${dirpath}/fruite.txt`, (err) => {
//   if (!err) {
//     console.log("file is renaming");
//   }
// });

// delete file
// fs.unlink(`${dirpath}/fruite.txt`, (err) => {
//   if (!err) {
//     console.log("file is deleting");
//   }
// });
