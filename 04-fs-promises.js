// callback hell => promise heaven
// - Read in hello.txt
const fs = require('fs')
// const fsPromises = fs.promises

fs.promises.readFile("./hello.txt", "utf-8")
  .then(helloData => {
    const nameFilePath = helloData.split('\n')[1]; //name.txt
    return fs.promises.readFile(nameFilePath, "utf-8");
  })
  .then(nameData => {
    console.log(nameData);
  })
  .catch(error => console.log(error));
