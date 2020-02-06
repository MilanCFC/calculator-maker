let calculator = require("./calculator");

(function() {
  let numberOne = calculator.getNumber("first");
  let operator = calculator.getOperator();
  let numberTwo = calculator.getNumber("second");
  let result = calculator.calculateResult(numberOne, operator, numberTwo);
  console.log("Result is:", "\x1b[32m", result, "\x1b[0m");
})();
