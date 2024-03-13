function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(op, numA, numB) {
  if (op == "+") {return add(numA, numB)}
  else if (op == "-") {return substract(numA, numB)}
  else if (op == "*") {return multiply(numA, numB).toFixed(2)}
  else if (op == "/") {return divide(numA, numB).toFixed(2)}
}

let numberA;
let numberB;
let operator;
let result;
let resultDisplay = document.querySelector(".result");
let numADisplay = document.querySelector(".num-a-display");
let numBDisplay = document.querySelector(".num-b-display");
let opDisplay = document.querySelector(".op-display");

let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let equalButton = document.querySelector(".equal")
let clearButton = document.querySelector(".clear");
let deleteButton = document.querySelector(".del");
let dotButton = document.querySelector(".dot");

let oneButton = document.querySelector(".one");
let twoButton = document.querySelector(".two");
let threeButton = document.querySelector(".three");
let fourButton = document.querySelector(".four");
let fiveButton = document.querySelector(".five");
let sixButton = document.querySelector(".six");
let sevenButton = document.querySelector(".seven");
let eightButton = document.querySelector(".eight");
let nineButton = document.querySelector(".nine");
let zeroButton = document.querySelector(".zero");

addButton.addEventListener("click", (e) => {
  operator = "+";
  opDisplay.innerText = " + ";
  if (numBDisplay.innerText != "") {
    numberA = +numADisplay.innerText;
    numberB = +numBDisplay.innerText;
    result = operate(operator, numberA, numberB);
    resultDisplay.innerText = result;
    numADisplay.innerText = result;
    numBDisplay.innerText = "";
  }
});

substractButton.addEventListener("click", (e) => {
  operator = "-";
  opDisplay.innerText = " - ";
  if (numBDisplay.innerText != "") {
    numberA = +numADisplay.innerText;
    numberB = +numBDisplay.innerText;
    result = operate(operator, numberA, numberB);
    resultDisplay.innerText = result;
    numADisplay.innerText = result;
    numBDisplay.innerText = "";
  }
});

multiplyButton.addEventListener("click", (e) => {
  operator = "*";
  opDisplay.innerText = " x ";
  if (numBDisplay.innerText != "") {
    numberA = +numADisplay.innerText;
    numberB = +numBDisplay.innerText;
    result = operate(operator, numberA, numberB);
    resultDisplay.innerText = result;
    numADisplay.innerText = result;
    numBDisplay.innerText = "";
  }
});

divideButton.addEventListener("click", (e) => {
  operator = "/";
  opDisplay.innerText = " / ";
  if (numBDisplay.innerText != "") {
    numberA = +numADisplay.innerText;
    numberB = +numBDisplay.innerText;
    result = operate(operator, numberA, numberB);
    resultDisplay.innerText = result;
    numADisplay.innerText = result;
    numBDisplay.innerText = "";
  }
});

equalButton.addEventListener("click", (e) => {
  numberA = +numADisplay.innerText;
  numberB = +numBDisplay.innerText;
  result = operate(operator, numberA, numberB);
  resultDisplay.innerText = result;
})

oneButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "1";
  } else {
    numBDisplay.innerText += "1";
  }
})

twoButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "2";
  } else {
    numBDisplay.innerText += "2";
  }
})

threeButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "3";
  } else {
    numBDisplay.innerText += "3";
  }
})

fourButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "4";
  } else {
    numBDisplay.innerText += "4";
  }
})

fiveButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "5";
  } else {
    numBDisplay.innerText += "5";
  }
})

sixButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "6";
  } else {
    numBDisplay.innerText += "6";
  }})

sevenButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "7";
  } else {
    numBDisplay.innerText += "7";
  }})

eightButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "8";
  } else {
    numBDisplay.innerText += "8";
  }})

nineButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "9";
  } else {
    numBDisplay.innerText += "9";
  }})

zeroButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += "0";
  } else {
    numBDisplay.innerText += "0";
  }})

dotButton.addEventListener("click", (e) => {
  if (operator == undefined) {
    numADisplay.innerText += ".";
  } else {
    numBDisplay.innerText += ".";
  }})

  clearButton.addEventListener("click", (e) => {
    numADisplay.innerText = "";
    numBDisplay.innerText = "";
    opDisplay.innerText = "";
    resultDisplay.innerText = "";
  })

  deleteButton.addEventListener("click", (e) => {
    if (numBDisplay.innerText != "") {
      numBDisplay.innerText = numBDisplay.innerText.slice(0, -1);
    } else if (opDisplay.innerText != "") {
      opDisplay.innerText = "";
    } else if (numADisplay.innerText != "") {
      numADisplay.innerText = numADisplay.innerText.slice(0, -1);
    }
  })
