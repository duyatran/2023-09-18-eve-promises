// Guess the output of this file, then run it and compare with
// what you guess

// 50% of the time, this returns a "Success!" msg
// 50% of the time, this returns a "Failure!" msg
const randomPromise = new Promise((resolve, reject) => {
  console.log("inside promise definition");

  const randNum = Math.random();

  if (randNum > 0.5) {
    console.log("inside success", randNum);
    // success
    resolve("Success!");
  } else {
    console.log("inside failure", randNum);
    // failure
    reject("Failure!");
  }
})

console.log("end of promise definition");

// chaining multiple then/catch is possible
randomPromise
  .then(msg => console.log(msg))
  .catch(error => console.log(error));