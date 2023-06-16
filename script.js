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

function displayResult(result) {
    resultText.textContent = result;
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
    }

    numberString1 = result.toString();
    numberString2 = "";

    operator = "+";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result}`);

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
    }

    numberString1 = result.toString();
    numberString2 = "";

    operator = "-";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result}`);

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
    }

    numberString1 = result.toString();
    numberString2 = "";

    operator = "*";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result}`);

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
    }

    numberString1 = result.toString();
    numberString2 = "";

    operator = "/";

    console.log(`Num1: ${numberString1} NUm2: ${numberString2} Result: ${result}`);

    return result;
}

function total() {
    if (numberString2 === "") {
        switch(operator) {
            case "+":
                add(numberString1, numberString1);
                break;
            case "-":
                sub(numberString1, numberString1);
                break;
            case "*":
                multi(numberString1, numberString1);
                break;
            case "/":
                div(numberString1, numberString1);
                break;
        }
    } else {
        switch(operator) {
            case "+":
                add(numberString1, numberString2);
                break;
            case "-":
                sub(numberString1, numberString2);
                break;
            case "*":
                multi(numberString1, numberString2);
                break;
            case "/":
                div(numberString1, numberString2);
                break;
        }
    }

    return result;
}

function updateNumber(value) {
    if (operator === "") return numberString1 += value;
    else return numberString2 += value;
}



zero.addEventListener("click", function () {
    updateNumber("0");
});

one.addEventListener("click", function () {
    updateNumber("1");
});

two.addEventListener("click", function () {
    updateNumber("2");
});

three.addEventListener("click", function () {
    updateNumber("3");
});

four.addEventListener("click", function () {
    updateNumber("4");
});

five.addEventListener("click", function () {
    updateNumber("5");
});

six.addEventListener("click", function () {
    updateNumber("6");
});

seven.addEventListener("click", function () {
    updateNumber("7");
});

eight.addEventListener("click", function () {
    updateNumber("8");
});

nine.addEventListener("click", function () {
    updateNumber("9");
});

plus.addEventListener("click", add);

minus.addEventListener("click", sub);