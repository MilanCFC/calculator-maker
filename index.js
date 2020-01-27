const readLineSync = require("readline-sync");

let numberOne = Number(readLineSync.question("Write your number: "));
console.log(numberOne);

function validateNumberOne(numberOne) {
  if (isNaN(numberOne)) {
    return "Slow down! This is not a number.";
  }
  return numberOne;
}
console.log(validateNumberOne(numberOne));

let operator = readLineSync.question("Write your operator: ");
console.log(operator);

let numberTwo = Number(readLineSync.question("Write your number: "));
console.log(numberTwo);

function validateNumberTwo(numberTwo) {
  if (isNaN(numberTwo)) {
    return "Slow down! This is not a number.";
  }
  return numberTwo;
}
console.log(validateNumberTwo(numberTwo));

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
