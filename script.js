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
  else if (op == "*") {return multiply(numA, numB)}
  else if (op == "/") {return divide(numA, numB)}
}

let numberA;
let numberB;
let operator;
let result;

let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let equalButton = document.querySelector(".equal")
let resultDisplay = document.querySelector(".result");
let numAInput = document.querySelector("#numA");
let numBInput = document.querySelector("#numB");
let clearButton = document.querySelector(".clear");

addButton.addEventListener("click", (e) => {
  operator = "+";
});

substractButton.addEventListener("click", (e) => {
  operator = "-";
});

multiplyButton.addEventListener("click", (e) => {
  operator = "*";
});

divideButton.addEventListener("click", (e) => {
  operator = "/";
});

equalButton.addEventListener("click", (e) => {
  numberA = +numAInput.value;
  numberB = +numBInput.value;
  result = operate(operator, numberA, numberB);
  resultDisplay.innerText = result;
})
