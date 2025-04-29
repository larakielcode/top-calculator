/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1;
let num2;
let oper; // string to store operator
let result; // string to store the math expression
let counter = 0;
let expression;

const add = (a, b) => result = formatNum(Number(a) + Number(b));
const sub = (a, b) => result = formatNum((a - b));
const multiply = (a, b) => result = formatNum((a * b));
const divide = (a, b) => {
    if (a == '0' || b == '0') {
        clearSc();
        return result = "LOSLOS NIMO";
    } else {
        result = formatNum((a / b));
    }
};

/* function format number to whole number or round off decimal */
function formatNum(arg) {
    if (arg % 1 !== 0) {
        return arg.toFixed(3);
    } else {
        return arg;
    }
}

const mainDisplay = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");
const clearScreen = document.querySelector("#clear");
const digits = document.querySelectorAll(".digits");
const operator = document.querySelectorAll(".operand");
const compute = document.querySelector("#equals");
const negate = document.querySelector(".negate");
const percent = document.querySelector(".percent");
const period = document.querySelector("#dotButton");

/* Percent Function */
percent.addEventListener("click", getPercent);
function getPercent() {
    if (oper == 'x') {
        num1 = num1 / 100;
        expression = `${num2} ${oper} ${num1}`;
        result = formatNum(num2 * num1);
    } else {
        clearSc();
    }
    displayInitialize();
    console.clear();
    console.log('%cvalues after clicking percent button', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
}

/* function negate */
negate.addEventListener("click", () => {
    if (num1 == '0') {
        result = num1;
    } else {
        num1 = (num1 * (-1));
        result = num1;
    }

    displayInitialize();
    console.clear();
    console.log('%cvalues after clicking negate button', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
});

/* initialize variables and display on load */
window.addEventListener("load", (event) => {
    //dump all values
    console.clear();
    console.log('%cfresh values after window load event', 'color:pink');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
    // initialize display
    period.disabled = false;
    num1 = "";
    num2 = "";
    result = "0";
    expression = "";
    oper = "";
    displayInitialize();
    console.clear();
    console.log('%cvalues after display initialize', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
});

/* when pressing a digit */
digits.forEach(btn => btn.addEventListener("click", checkDigit));

/* function to display on screen */
function checkDigit() {

    let num = this.textContent;

    if (counter > 0) {
        clearSc();
    }

    showDigit(num);
    displayInitialize();

    console.clear();
    console.log('%cvalues after display pressing a digit', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value);
}

/* function to show the digits with error handling */
function showDigit(num) {

    num1 += num;
    /* isNotAllZero function checks for the existing num1 if its not all zero */
    if ((!isNotAllZero(num1)) && num == '0') {
        num1 = '0'; // if num1 is all 0 reset the value of num1 to empty
    }

    if (num == '.') {
        checkMoreDot();
    }

    num1 = removeTrailingZero(num1);
    //num1 = checkMoreDot(num1);
    return (num1 == "") ? num1 = "0" : result = num1;
}

/* Check for a number input that it is not all zero */
let isNotAllZero = (num) => {
    return num * 1 !== 0;
};

/* function to disable the dot button */
function checkMoreDot() {
    if (num1.includes('.')) {
        period.disabled = true;
    }
}

/* function to remove trailing 0 */
function removeTrailingZero(arg) {
    return arg.replace(/^0+/, '');
}

/* clear all data */
clearScreen.addEventListener("click", clearSc);
function clearSc() {
    //clear the variables
    num1 = "";
    num2 = "";
    oper = "";
    expression = "";
    result = "0";
    counter = 0;

    displayInitialize();
    console.clear();
    console.log('%cvalues after clear screen', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
}

/* function for pressing an operand */
operator.forEach(operand => operand.addEventListener("click", storeOperand));
function storeOperand() {
    // check if the user press continuously on the operand
    if (oper === "") {
        oper = this.textContent;
        num2 = num1;
        expression = `${num1} ${oper}`;
        num1 = "";
    } else {
        counter = 0;
        oper = this.textContent;
        num2 = result;
        expression = `${num2} ${oper}`;
        num1 = "";
    }

    if (result == "LOSLOS NIMO") {
        clearSc();
    }
    period.disabled = false;
    displayInitialize();
    console.clear();
    console.log('%cvalues after pressing the operator', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
}

/* Code when user click equals */
compute.addEventListener("click", getComputation);
function getComputation() {
    result = `${num2} ${oper} ${num1}`;
    if ((num1 != "" || num2 != "") && oper != "") {
        expression = result;
        getAnswer();
        counter++;
    } else {
        clearSc();
    }
    displayInitialize();
    period.disabled = false;
    console.clear();
    console.log('%cvalues after pressing the equals', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('type of result===> ', typeof result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('var counter ===> ', counter);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
}

/* function for display */
function displayInitialize() {
    if (num1 == 0) {
        summaryDisplay.value = expression;
        mainDisplay.value = result;
    } else {
        summaryDisplay.value = expression;
        mainDisplay.value = result;
    }
}

function getAnswer() {
    switch (oper) {
        case '+':
            add(num2, num1);
            break;
        case '-':
            sub(num2, num1);
            break;
        case 'x':
            multiply(num2, num1);
            break;
        case '/':
            divide(num2, num1);
            break;
        default:
            break;
    }
}