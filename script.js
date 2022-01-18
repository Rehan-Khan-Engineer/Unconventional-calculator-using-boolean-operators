let defaultResult = 0;

let currentResult = defaultResult;

let entries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

// the description & result output of calculation

function createOutput(prevResult, operator, calcNumber) {
  const calcDescription = `${prevResult} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// object inside array

function writeToLog(
  operationIdentifier,
  prevResult,
  numberEnteredByUser,
  finalResult
) {
  const entry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: numberEnteredByUser,
    output: finalResult,
  };

  entries.push(entry);
  console.log(entries);
}

// using if statement instead of seperate functions

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();

  if (
    (calculationType !== "addition" &&
      calculationType !== "subtraction" &&
      calculationType !== "multiplication" &&
      calculationType !== "division") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "addition") {
    currentResult = currentResult + enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtraction") {
    currentResult = currentResult - enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiplication") {
    currentResult = currentResult * enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "division") {
    currentResult = currentResult / enteredNumber;
    mathOperator = "/";
  }

  createOutput(initialResult, mathOperator, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("addition");
}

function subtract() {
  calculateResult("subtraction");
}

function multiply() {
  calculateResult("multiplication");
}

function divide() {
  calculateResult("division");
}

addBtn.addEventListener("click", add);

subtractBtn.addEventListener("click", subtract);

multiplyBtn.addEventListener("click", multiply);

divideBtn.addEventListener("click", divide);
