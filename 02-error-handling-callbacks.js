// Be careful when using try-catch with async code
const fs = require('fs');

// Why does this try-catch block not catch the error?
try {
  fs.readFile("./hellllllllo.txt", "utf-8", () => {});
  console.log("end of try block");
} catch (error) {
  console.log("inside catch:", error);
}


// Callback hell
// - Read in hello.txt
fs.readFile("./hello.txt", "utf-8", (err, helloData) => {
  if (err) {
    console.log("ERROR: ", err);
    return;
  }

  // - Extract the second line of the file, which is the name of the next file to read in
  const nameFilePath = helloData.split('\n')[1]; // name.txt

  // - Read in that second file and log out the result
  fs.readFile(nameFilePath, "utf-8", (err, nameData) => {
    console.log(nameData);
  })
})

