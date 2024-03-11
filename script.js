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
