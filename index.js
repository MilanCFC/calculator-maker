const readLineSync = require("readline-sync");

let numberOne = Number(readLineSync.question("Write your number: "));
console.log(numberOne);

let operator = readLineSync.question("Write your operator: ");
console.log(operator);

let numberTwo = Number(readLineSync.question("Write your number: "));
console.log(numberTwo);

function calculateResult() {
  let result = 0;
  if (operator === "+") {
    result = numberOne + numberTwo;
  } else if (operator === "-") {
    result = numberOne - numberTwo;
  } else if (operator === "/") {
    result = numberOne / numberTwo;
  } else if (operator === "*") {
    result = numberOne * numberTwo;
  }
  return result;
}
console.log(calculateResult());

// it is done
