const readLineSync = require("readline-sync");

class Calculator {
  validateNumber(number) {
    if (isNaN(number)) {
      console.log("\x1b[31m", "Slow down! This is not a number.", "\x1b[0m");
      return false;
    }
    return true;
  }

  getNumber(order) {
    let number = Number(readLineSync.question(`Write your ${order} number: `));
    if (this.validateNumber(number) === false) {
      return this.getNumber(order);
    }
    return number;
  }

  validateOperator(selectedOperator) {
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

  getOperator() {
    let selectedOperator = readLineSync.question("Write your operator: ");
    if (this.validateOperator(selectedOperator) === false) {
      return this.getOperator();
    }
    return selectedOperator;
  }

  calculateResult(numberOne, operator, numberTwo) {
    let result = 0;
    switch (operator) {
      case "+":
        result = numberOne + numberTwo;
        break;
      case "-":
        result = numberOne - numberTwo;
        break;
      case "*":
        result = numberOne * numberTwo;
        break;
      case "/":
        result = numberOne / numberTwo;
        break;
    }
    return result;
  }
}

let calculator = new Calculator();

module.exports = calculator;
