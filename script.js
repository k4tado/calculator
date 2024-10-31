//testbutton.onclick = () => alert("testttt button");

let firstNumber = null;
let secondNumber = null;
let operator = null;
//let intermediateResult = null;

// css references
textDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const opButtons = document.querySelector(".operator");


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

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;
    const plusButton = document.getElementById(buttonValue);

      plusButton.style.backgroundColor = "yellow";






  })
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
