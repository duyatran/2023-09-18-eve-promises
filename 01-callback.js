// Callbacks used in a synchronous flow

const sayGoodMorning = () => {
  console.log("Good morning");
}

const sayGoodAfternoon = () => {
  console.log("Good afternoon");
}

const repeatAction = (numberOfTimes, action) => {
  for (let i = 0; i < numberOfTimes; i++) {
    action();
  }
}

repeatAction(10, sayGoodMorning);

// Callbacks used in an **asynchronous** flow
setTimeout(sayGoodMorning, 1000); // setTimeout "promises" to call sayGoodmorning in 1s, but it returns immediately
console.log("Having brunch");
setTimeout(sayGoodAfternoon, 2000);


// fs example, reading a file
const fs = require('fs');

const content = fs.readFileSync("./hello.txt", "utf-8"); // sync variant
console.log(content);

// async variant
fs.readFile("./averylongfile.txt", "utf-8", (err, data) => {
  console.log("averylongfile:", data);
});

fs.readFile("./hello.txt", "utf-8", (err, data) => {
  console.log("hello:", data);
});

console.log("the end");

