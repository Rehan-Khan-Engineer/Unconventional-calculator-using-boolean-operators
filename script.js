let defaultResult = 0;

let currentResult = defaultResult;

let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

// the description & result output of calculation

function createOutput(numberBeforeCalc, operator, calcNumber) {
  const calcDescription = `${numberBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// object inside array

function writeToLog(
  operationIdentifier,
  prevResult,
  numberEnteredByUser,
  finalResult
) {
  const logEntry = {
    operation: operationIdentifier,
    PrevResult: prevResult,
    number: numberEnteredByUser,
    output: finalResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

// using if statement instead of seperate functions

function calculationResult(calculationType) {
  const enteredNumber = getUserInput();

  if (
    (calculationType !== "addition" &&
      calculationType !== "subtraction" &&
      calculationType !== "multiplication" &&
      calculationType !== "division") ||
    enteredNumber === 0
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

function addition() {
  calculationResult("addition");
}

function subtraction() {
  calculationResult("subtraction");
}

function multiplication() {
  calculationResult("multiplication");
}

function division() {
  calculationResult("division");
}

addBtn.addEventListener("click", addition);

subtractBtn.addEventListener("click", subtraction);

multiplyBtn.addEventListener("click", multiplication);

divideBtn.addEventListener("click", division);
