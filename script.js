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

let operation = [];

function displayResult(result) {
    resultText.textContent = result;
}

function storageOperation(value) {
    operation.push(value);
}

function eraseLast() {
    operation.pop();
}

open.addEventListener("click", function () {
    storageOperation("(");
    open.disabled = true;
    close.disabled = false;
});

close.addEventListener("click", function () {
    storageOperation(")");
    open.disabled = false;
    close.disabled = true;
});

divide.addEventListener("click", function () {    
    if (operation[operation.length-1] === "/" || operation[operation.length-1] === "*" || operation[operation.length-1] === "+" || operation[operation.length-1] === "-") {
        eraseLast();
        storageOperation("/");
    } else storageOperation("/");

    console.log(operation);
});

multiply.addEventListener("click", function () {    
    if (operation[operation.length-1] === "/" || operation[operation.length-1] === "*" || operation[operation.length-1] === "+" || operation[operation.length-1] === "-") {
        eraseLast();
        storageOperation("*");
    } else storageOperation("/");

    console.log(operation);
});