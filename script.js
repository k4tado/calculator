//testbutton.onclick = () => alert("testttt button");

// variable initilizations
let firstNumber = null;
let secondNumber = null;
let operator = null;
let isButtonClicked = null;

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
  secondNumber = parseFloat(textDisplay.textContent);
  let result = calculate(firstNumber, secondNumber, operator);
  textDisplay.textContent = result;
  removeHighlightOp(operator);
}

function handleOperator(buttonValue) {
  operator = buttonValue;
  highlightOp(operator);
  firstNumber = parseFloat(textDisplay.textContent);
  textDisplay.textContent = "";
}

function handleDelete() {
  textDisplay.textContent = textDisplay.textContent.slice(0, -1);
        if (textDisplay.textContent == "") {
          textDisplay.textContent = "0";
        }
}

function handleDigitInput(buttonValue) {
      if (textDisplay.textContent === "0") {
        textDisplay.textContent = buttonValue;
      } else if (!isNaN(buttonValue)) {
        textDisplay.textContent += buttonValue;
      }
}

function handleDecimalPoint(buttonValue) {
  if (buttonValue === "." && !textDisplay.textContent.includes(".")) {
    textDisplay.textContent += buttonValue;
  }
}

function handleClear() {
  textDisplay.textContent = "0";
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  removeHighlightOp(operator);
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
function removeHighlightOp(operator) {
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
    }
    else if (buttonValue === "C") {
      handleClear();
    }
    else if (buttonValue === "DEL") {
      handleDelete();
    }
    else if (buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/") {
      handleOperator(buttonValue);
    }
    else if (buttonValue === "=") {
      handleEquals();
    }
    else if (buttonValue === ".") {
      handleDecimalPoint(buttonValue);
    }
  });
});