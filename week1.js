const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Please enter a valid number!");
  } else if (number > 0) {
    console.log("The number is positive");
  } else if (number === 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is negative");
  }})
