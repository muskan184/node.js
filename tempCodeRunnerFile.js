getdata().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
    }); //to array  return promisees
});