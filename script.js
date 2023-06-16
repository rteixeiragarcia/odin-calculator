const resultText = document.getElementById("result-text");
const line1Text = document.getElementById("line-1-display");
const line2Text = document.getElementById("line-2-display");
const line3Text = document.getElementById("line-3-display");
const clear = document.getElementById("clear");
const open = document.getElementById("open");
const close = document.getElementById("close");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const dot = document.getElementById("dot");
const percentage = document.getElementById("percentage");
const equal = document.getElementById("equal");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let numberString1 = "0";
let numberString2 = "0";

let operator = "";

function displayResult(result) {
    resultText.textContent = result;
}

function plus(num1, num2) {
    return Number(num1) + Number(num2);
}

function minus(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}