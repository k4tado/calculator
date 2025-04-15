//testbutton.onclick = () => alert("testttt button");

let firstNumber = null;
let secondNumber = null;
let operator = null;
let isButtonClicked = null;
//let intermediateResult = null;

const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const multiButton = document.getElementById("multiButton");
const divButton = document.getElementById("divButton");

// css references
textDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const opButtons = document.querySelector(".operator");
const digit = document.querySelector(".digit");

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

// managing display
function highlightOp(operator) {
  if (operator === "+") {
    operator = plusButton;
  } else if (operator === "-") {
    operator = minusButton;
  } else if (operator === "*") {
    operator = multiButton;
  } else if (operator === "/") {
    operator = minusButton;
  }
  operator.style.backgroundColor = "yellow";
}

function removeHighlightOp(operator) {
  if (operator === "+") {
    operator = plusButton;
  } else if (operator === "-") {
    operator = minusButton;
  } else if (operator === "*") {
    operator = multiButton;
  } else if (operator === "/") {
    operator = minusButton;
  }
  operator.style.backgroundColor = "rgba(0, 201, 252, 0.822)";
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;

    // remove the initial 0 when first value is entered. ensures display does not show an operator
    if (textDisplay.textContent === "0" && !isNaN(buttonValue)) {
      textDisplay.textContent = buttonValue;
    }

    // only allow digits to update display and only allow "." to be pressed once
    else if (
      !isNaN(buttonValue) ||
      (buttonValue == "." && !textDisplay.textContent.includes("."))
    ) {
      textDisplay.textContent += buttonValue;
    }

    // clear the display
    if (buttonValue === "C") {
      textDisplay.textContent = "0";
      firstNumber = 0;
      secondNumber = 0;
      result = 0;
    }

    // DEL will remove last element of the string in textDisplay
    if (!(textDisplay.textContent == "") || textDisplay.textContent == "0") {
      if (buttonValue === "DEL") {
        textDisplay.textContent = textDisplay.textContent.slice(0, -1);
        if (textDisplay.textContent == "") {
          textDisplay.textContent = "0";
        }
      }
    }

    // operator logic
    if (
      buttonValue == "+" ||
      buttonValue == "-" ||
      buttonValue == "*" ||
      buttonValue == "/"
    ) {
      operator = buttonValue;
      highlightOp(operator);

      firstNumber = parseFloat(textDisplay.textContent);
      textDisplay.textContent = "0";
    }

    // equals logic
    if (buttonValue === "=") {
      secondNumber = parseFloat(textDisplay.textContent);
      let result = calculate(firstNumber, secondNumber, operator);
      textDisplay.textContent = result;
      removeHighlightOp(operator);
    }
  });
});

/*
 Press number button and store it in firstNumber
 Press operator and store it in operator
 press number and store it in secondNumber
 Press either number or operator and display new number



buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;

    if ( buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
      if (firstNumber !== null && operator !== null ){
        secondNumber = parseFloat(textDisplay.textContent);
        intermediateResult = calculate(firstNumber, secondNumber, operator);
        textDisplay.textContent = "we are here";
        textDisplay.textContent = Math.round(intermediateResult * 1000) / 1000;
        firstNumber = intermediateResult;
        
      } else {
        firstNumber = parseFloat(textDisplay.textContent);
      }
      operator = buttonValue;
      textDisplay.textContent = intermediateResult;
    } else if (buttonValue === "=") {
      secondNumber = parseFloat(textDisplay.textContent);
      textDisplay.textContent = Math.round(calculate(firstNumber, secondNumber, operator) * 1000) / 1000;
      intermediateResult = null;
    } else if (buttonValue === "C"){
      firstNumber = null;
      secondNumber = null;
      operator = null;
      intermediateResult = null;
      textDisplay.textContent = "0";
    } else if (textDisplay.textContent.length < 10) {
      if (textDisplay.textContent === "0") {
        textDisplay.textContent = buttonValue;
      } else {
        textDisplay.textContent += buttonValue;
      }
    }
  });
});

*/
