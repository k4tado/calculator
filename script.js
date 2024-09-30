
testbutton.onclick = () => alert("testttt button");

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

let num = 0;
let num2 = 0;
let operator;

function operate (num, num2, operator) {
    if (operator == add ) {
       result = add(num, num2);
    } else if (operator == subtract) {
        result = subtract(num, num2);
    } else if (operator == multiply) {
        result = multiply(num, num2)
    } else if (operator == divide) {
        result = divide(num, num2)
    }
    return result;
}

document.querySelector('#buttons').addEventListener('click', event => {
      const value = event.target.textContent;
      console.log(value);
    });

/*

const blueButton = document.getElementById('btn');
blueButton.addEventListener('click', () => {
    document.getElementById('title').style.color = 'blue';
});

const redButton = document.getElementById('otherbtn');
redButton.addEventListener('click', () => {
    document.getElementById('title').style.color = 'red';
});

const title = document.getElementById('title');
title.addEventListener('mouseover', () => {
    //document.getElementById('title').style.color = 'green';
    title.style.color = 'green';
    title.style.fontFamily = 'Arial';
});

/*title.addEventListener('mouseout', () => {
    title.style.color = 'white';
});

title.onmouseout = () => {
    title.style.color = 'white';
    title.style.fontFamily = 'Times New Roman';

}

    <div class="random content">
    <button id="btn">I CHANGE EVERYTHING BLUE</button>
    <button id="otherbtn">I CHANGE EVERYTHING RED</button>
</div>

*/