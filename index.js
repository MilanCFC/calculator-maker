const readLineSync = require("readline-sync");

let numberOne = readLineSync.question("Write your number: ");
console.log(numberOne);

let operator = readLineSync.question("Write your operator: ");
console.log(operator);

let numberTwo = readLineSync.question("Write your number: ");
console.log(numberTwo);

let result = oneBigResult {
 if (operator === "+") {
     result = numberOne + numberTwo;
 } else if (operator === "-") {
      result = numberOne - numberTwo;
  } else if (operator === "/") {
      result = numberOne / numberTwo;
  } else if (operator === "*") {
      result = numberOne * numberTwo;
  }
}
console.log(result);