testbutton.onclick = () => alert("testttt button");

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

function operate(num, num2, operator) {
  if (operator == add) {
    result = add(num, num2);
  } else if (operator == subtract) {
    result = subtract(num, num2);
  } else if (operator == multiply) {
    result = multiply(num, num2);
  } else if (operator == divide) {
    result = divide(num, num2);
  }
  return result;
}

textDisplay = document.querySelector("#display-text");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.textContent;
    if (textDisplay.textContent === "0") {
      textDisplay.textContent = buttonValue;
    } else {
      textDisplay.textContent += buttonValue;
    }
  });
});

const clearButton = document.querySelector('button[data-value="C"]');
clearButton.addEventListener('click', () => {
    textDisplay.textContent = '0';
});