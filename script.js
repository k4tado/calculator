//testbutton.onclick = () => alert("testttt button");

// variable initilizations
let firstNumber = "";
let secondNumber = "";
let operator = null;
let operatorFlag = false;
let equalsFlag = false;

// button initilizations
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiButton = document.getElementById("multiButton");
const divButton = document.getElementById("divButton");

// css references
textDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const opButtons = document.querySelector(".operator");
const digit = document.querySelector(".digit");

// -------------------- HANDLE INPUTS -------------------- //

function handleEquals() {
  let result = calculate(
    parseFloat(firstNumber),
    parseFloat(secondNumber),
    operator
  );
  textDisplay.textContent = result;
  removeHighlightOp(operator);
  equalsFlag = true;
}

function handleOperator(buttonValue) {

  if (!operatorFlag) {
  operator = buttonValue;
  highlightOp(operator);
  operatorFlag = true;
  clearDisplay();
  } else if (operatorFlag) {
    firstNumber = calculate(parseFloat(firstNumber),parseFloat(secondNumber),operator)
    removeHighlightOp();
    operator = buttonValue;
    highlightOp(operator);
    textDisplay.textContent = firstNumber;
    secondNumber = "";
    equalsFlag = true;
  }
}

function handleDelete() {
  textDisplay.textContent = textDisplay.textContent.slice(0, -1);
  if (textDisplay.textContent == "") {
    textDisplay.textContent = "0";
  }

  if (!operatorFlag) {
    firstNumber = firstNumber.slice(0, -1);
  } else if (operatorFlag) {
    secondNumber += secondNumber.slice(0, -1);
  }
}

function handleDigitInput(buttonValue) {
  if (equalsFlag === true && operatorFlag === true) {
    clearDisplay();
    equalsFlag = false;
  }
  if (equalsFlag === true) {
    handleClear();
    equalsFlag = false;
  }
    // remove leading 0 for default display
  if (textDisplay.textContent === "0") {
    textDisplay.textContent = buttonValue;

    // check if the button pressed is a number pressed and if so, update display
  } else if (!isNaN(buttonValue)) {
    textDisplay.textContent += buttonValue;
  }

  if (!operatorFlag) {
    firstNumber += buttonValue;
  } else if (operatorFlag) {
    secondNumber += buttonValue;
  }
}

function handleDecimalPoint(buttonValue) {
  if (buttonValue === "." && !textDisplay.textContent.includes(".")) {
    textDisplay.textContent += buttonValue;
    if (!operatorFlag) {
      firstNumber += buttonValue;
    } else if (operatorFlag) {
      secondNumber += buttonValue;
    }
  }
}

function handleClear() {
  textDisplay.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  result = null;
  removeHighlightOp();
  operatorFlag = false;
  operator = null;
}

function clearDisplay() {
  textDisplay.textContent = "0";
}
// --------------------^HANDLE INPUTS^-------------------- //

// -------------------- Calc Logic -------------------- //
function calculate(num, num2, operator) {
  if (operator == "+") {
    result = add(num, num2);
  } else if (operator == "-") {
    result = subtract(num, num2);
  } else if (operator == "*") {
    result = multiply(num, num2);
  } else if (operator == "/") {
    if (num2 == 0) {
      return "ERROR";
    }
    result = divide(num, num2);
  }
  return result;
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
// --------------------^Calc Logic^-------------------- //

// highlight operator function
function highlightOp(operator) {
  if (operator === "+") {
    operator = plusButton;
  } else if (operator === "-") {
    operator = minusButton;
  } else if (operator === "*") {
    operator = multiButton;
  } else if (operator === "/") {
    operator = divButton;
  }
  operator.style.backgroundColor = "yellow";
}

// remove hightlight opererator function
function removeHighlightOp() {
  document
    .querySelectorAll(".operator")
    .forEach((btn) => (btn.style.backgroundColor = "rgba(0, 201, 252, 0.822)"));
}

// calculator button event listener
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;

    if (!isNaN(buttonValue)) {
      handleDigitInput(buttonValue);
    } else if (buttonValue === "C") {
      handleClear();
    } else if (buttonValue === "DEL") {
      handleDelete();
    } else if (
      buttonValue == "+" ||
      buttonValue == "-" ||
      buttonValue == "*" ||
      buttonValue == "/"
    ) {
      handleOperator(buttonValue);
    } else if (buttonValue === "=") {
      handleEquals();
    } else if (buttonValue === ".") {
      handleDecimalPoint(buttonValue);
    }
  });
});
