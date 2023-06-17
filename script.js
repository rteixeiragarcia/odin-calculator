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

let numberString1 = "";
let numberString2 = "";

let operator = "";

let result = 0;

function displayResult() {
    return resultText.textContent = result;
}

function displayNumber() {
    if (numberString2 === "") return line1Text.textContent += numberString1;
    else return line1Text.textContent += numberString2;
}

function displayOperator() {
    return line1Text.textContent += operator;
}

function updateNumber(value) {
    if (operator === "") return numberString1 += value;
    else return numberString2 += value;
}

function erase() {
    numberString1 = "";
    numberString2 = "";
    operator = "";
    result = 0;
}

function add() {
    switch(operator) {
        case "+":
            result = +(Number(numberString1) + Number(numberString2)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString2)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString2)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString2)).toFixed(2);
            break;
        case "":
            result = numberString1;
            break;
    }

    resultText.textContent = operator;

    numberString1 = result.toString();
    numberString2 = "";

    operator = "+";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result} Operator: ${operator}`);

    return result;
}

function sub() {
    switch(operator) {
        case "+":
            result = +(Number(numberString1) + Number(numberString2)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString2)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString2)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString2)).toFixed(2);
            break;
        case "":
            result = numberString1;
            break;
    }

    resultText.textContent = operator;

    numberString1 = result.toString();
    numberString2 = "";

    operator = "-";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result} Operator: ${operator}`);

    return result;
}

function multi() {
    switch(operator) {
        case "+":
            result = +(Number(numberString1) + Number(numberString2)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString2)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString2)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString2)).toFixed(2);
            break;
        case "":
            result = numberString1;
            break;
    }

    resultText.textContent = operator;

    numberString1 = result.toString();
    numberString2 = "";

    operator = "*";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result} Operator: ${operator}`);

    return result;
}

function div() {
    switch(operator) {
        case "+":
            result = +(Number(numberString1) + Number(numberString2)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString2)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString2)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString2)).toFixed(2);
            break;
        case "":
            result = numberString1;
            break;
    }

    resultText.textContent = operator;

    numberString1 = result.toString();
    numberString2 = "";

    operator = "/";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result} Operator: ${operator}`);

    return result;
}

function total() {
    if (numberString2 === "") {
        switch(operator) {
            case "+":
            result = +(Number(numberString1) + Number(numberString1)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString1)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString1)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString1)).toFixed(2);
            break;
        }
    } else {
        switch(operator) {
            case "+":
            result = +(Number(numberString1) + Number(numberString2)).toFixed(2);
            break;
        case "-":
            result = +(Number(numberString1) - Number(numberString2)).toFixed(2);
            break;
        case "*":
            result = +(Number(numberString1) * Number(numberString2)).toFixed(2);
            break;
        case "/":
            result = +(Number(numberString1) / Number(numberString2)).toFixed(2);
            break;
        }
    }

    return result;
}

zero.addEventListener("click", function () {
    updateNumber("0");
    displayNumber("0");
});

one.addEventListener("click", function () {
    updateNumber("1");
    displayNumber("1");
});

two.addEventListener("click", function () {
    updateNumber("2");
    displayNumber("2");
});

three.addEventListener("click", function () {
    updateNumber("3");
    displayNumber("3");
});

four.addEventListener("click", function () {
    updateNumber("4");
    displayNumber("4");
});

five.addEventListener("click", function () {
    updateNumber("5");
    displayNumber("5");
});

six.addEventListener("click", function () {
    updateNumber("6");
    displayNumber("6");
});

seven.addEventListener("click", function () {
    updateNumber("7");
    displayNumber("7");
});

eight.addEventListener("click", function () {
    updateNumber("8");
    displayNumber("8");
});

nine.addEventListener("click", function () {
    updateNumber("9");
    displayNumber("9");
});

plus.addEventListener("click", function () {
    add();
    displayOperator();
    displayResult();
});

minus.addEventListener("click", function () {
    sub();
    displayOperator();
    displayResult();
});

multiply.addEventListener("click", function () {
    multi();
    displayOperator();
    displayResult();
});

divide.addEventListener("click", function () {
    div();
    displayOperator();
    displayResult();
});

dot.addEventListener("click", function () {
    updateNumber(".");
    displayNumber(".");
});

equal.addEventListener("click", function () {
    total();
    displayResult();
});

clear.addEventListener("click", function () {
    erase();
    displayResult();
});