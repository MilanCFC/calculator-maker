const readLineSync = require("readline-sync");

function validateNumber(number) {
  if (isNaN(number)) {
    console.log("\x1b[31m", "Slow down! This is not a number.", "\x1b[0m");
    return false;
  }
  return true;
}

function getNumber(order) {
  let number = Number(readLineSync.question(`Write your ${order} number: `));
  if (validateNumber(number) === false) {
    return getNumber(order);
  }
  return number;
}

function validateOperator(selectedOperator) {
  let arrayOperator = ["+", "-", "*", "/"];
  if (arrayOperator.includes(selectedOperator)) {
    return true;
  }
  console.log(
    "\x1b[31m",
    "Slow down! This is not a valid operator.",
    "\x1b[0m"
  );
  return false;
}

function getOperator() {
  let selectedOperator = readLineSync.question("Write your operator: ");
  if (validateOperator(selectedOperator) === false) {
    return getOperator();
  }
  return selectedOperator;
}

let numberOne = getNumber("first");
let operator = getOperator();
let numberTwo = getNumber("second");

function calculateResult(numberOne, operator, numberTwo) {
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
console.log(
  "Result is:",
  "\x1b[32m",
  calculateResult(numberOne, operator, numberTwo),
  "\x1b[0m"
);
