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

function isInteger(num) {
  return num % 1 === 0;
}

function operate(op, numA, numB) {
  let result;
  switch (op) {
    case "+":
      result = add(numA, numB);
      break;
    case "-":
      result = substract(numA, numB);
      break;
    case "x":
      result = multiply(numA, numB);
      break;
    case "/":
      result = divide(numA, numB);
      break;
    default:
      result = NaN;
  }
  return isInteger(result) ? result : result.toFixed(2);
}


function handleNumberClick(e) {
  const num = e.target.innerText;
  if (operator === undefined) {
    numADisplay.innerText += num;
  } else {
    numBDisplay.innerText += num;
  }
}

function handleOperatorClick(e) {
  operator = e.target.innerText;
  opDisplay.innerText = operator;
  if (numBDisplay.innerText !== "") {
    numberA = +numADisplay.innerText;
    numberB = +numBDisplay.innerText;
    result = operate(operator, numberA, numberB);
    resultDisplay.innerText = "= " + result;
    numADisplay.innerText = result;
    numBDisplay.innerText = "";
  }
}

function handleClearClick() {
  numADisplay.innerText = "";
  numBDisplay.innerText = "";
  opDisplay.innerText = "";
  resultDisplay.innerText = "";
}

function handleDeleteClick() {
  if (numBDisplay.innerText !== "") {
    numBDisplay.innerText = numBDisplay.innerText.slice(0, -1);
  } else if (opDisplay.innerText !== "") {
    opDisplay.innerText = "";
  } else if (numADisplay.innerText !== "") {
    numADisplay.innerText = numADisplay.innerText.slice(0, -1);
  }
}

function handleEqualClick() {
  numberA = +numADisplay.innerText;
  numberB = +numBDisplay.innerText;
  result = operate(operator, numberA, numberB);
  if (numADisplay.innerText == "" || numBDisplay.innerText == "") {
    resultDisplay.innerText = "";
    return;
  }
  resultDisplay.innerText = "= " + result;
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

addButton.addEventListener("click", handleOperatorClick);
substractButton.addEventListener("click", handleOperatorClick);
multiplyButton.addEventListener("click", handleOperatorClick);
divideButton.addEventListener("click", handleOperatorClick);

equalButton.addEventListener("click", handleEqualClick)

oneButton.addEventListener("click", handleNumberClick);
twoButton.addEventListener("click", handleNumberClick);
threeButton.addEventListener("click", handleNumberClick);
fourButton.addEventListener("click", handleNumberClick);
fiveButton.addEventListener("click", handleNumberClick);
sixButton.addEventListener("click", handleNumberClick);
sevenButton.addEventListener("click", handleNumberClick);
eightButton.addEventListener("click", handleNumberClick);
nineButton.addEventListener("click", handleNumberClick);
zeroButton.addEventListener("click", handleNumberClick);
dotButton.addEventListener("click", handleNumberClick);

clearButton.addEventListener("click", handleClearClick);
deleteButton.addEventListener("click", handleDeleteClick);

// Keyboard support

function handleKeyDown(event) {
  const key = event.key;

  switch (key) {
    case "Enter":
      equalButton.click();
      break;
    case "+":
      addButton.click();
      break;
    case "-":
      substractButton.click();
      break;
    case "*":
      multiplyButton.click();
      break;
    case "/":
      divideButton.click();
      break;
    case "1":
      oneButton.click();
      break;
    case "2":
      twoButton.click();
      break;
    case "3":
      threeButton.click();
      break;
    case "4":
      fourButton.click();
      break;
    case "5":
      fiveButton.click();
      break;
    case "6":
      sixButton.click();
      break;
    case "7":
      sevenButton.click();
      break;
    case "8":
      eightButton.click();
      break;
    case "9":
      nineButton.click();
      break;
    case "0":
      zeroButton.click();
      break;
    case ".":
      dotButton.click();
      break;
    case ",":
      dotButton.click();
      break;
    case "Backspace":
      deleteButton.click();
      break;
    case "Delete":
      clearButton.click();
      break;
  }
}

document.addEventListener("keydown", handleKeyDown);
