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
  if (op == "+") {add(numA, numB)}
  else if (op == "-") {substract(numA, numB)}
  else if (op == "*") {multiply(numA, numB)}
  else if (op == "/") {divide(numA, numB)}
}

let numberA;
let numberB;
let operator;
let result;

let addButton = document.querySelector(".add");
let substractButton = document.querySelector(".substract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let resultDisplay = document.querySelector(".result");
let numAInput = document.querySelector("#numA");
let numBInput = document.querySelector("#numB");
let clearButton = document.querySelector(".clear");

addButton.addEventListener((click) => {
  console.log("hey");
})
