const readLineSync = require("readline-sync");

function validateNumber(number) {
  if (isNaN(number)) {
    console.log("\x1b[31m", "Slow down! This is not a number.");
    return false;
  }
  return true;
}

function getNumber(order) {
  let number = Number(readLineSync.question(`Write your ${order} number: `));
  console.log(number);
  if (validateNumber(number) === false) {
    return getNumber(order);
  }
  return number;
}
let numberOne = getNumber("first");
let operator = getOperator();
let numberTwo = getNumber("second");

function validateOperator(selectedOperator) {
  let arrayOperator = ["+", "-", "*", "/"];
  if (arrayOperator.includes(selectedOperator)) {
    return true;
  }
  console.log("\x1b[31m", "Slow down! This is not a valid operator.");
  return false;
}

function getOperator() {
  let selectedOperator = readLineSync.question("Write your operator: ");
  console.log(selectedOperator);
  if (validateOperator() === false) {
    return getOperator();
  }
  return selectedOperator;
}

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
