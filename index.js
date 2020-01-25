const readLineSync = require("readline-sync");

let numberOne = readLineSync.question("Write your number: ");
console.log(numberOne);

let operator = readLineSync.question("Write your operator: ");
console.log(operator);

let numberTwo = readLineSync.question("Write your number: ");
console.log(numberTwo);

function calculateResult() {
  let result = 0;
  if (operator === "+") {
    result = Number(numberOne) + Number(numberTwo);
  } else if (operator === "-") {
    result = Number(numberOne) - Number(numberTwo);
  } else if (operator === "/") {
    result = Number(numberOne) / Number(numberTwo);
  } else if (operator === "*") {
    result = Number(numberOne) * Number(numberTwo);
  }
  return result;
}
console.log(calculateResult());
