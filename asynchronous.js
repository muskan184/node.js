// console.log("start from here");

// setTimeout(() => {
//   console.log("middle from here");
// }, 2000);

// console.log("upper  from here");
// console.log("lower from here");

// problem occur in async
a = 10;
b = 20;

setTimeout(() => {
  b = 50;
}, 2000);

console.log(a + b);

// handle this problem
// uisng promises

let waitdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(50);
  }, 2000);
}).then((data) => {
  b = data;
  console.log(a + b);
});
