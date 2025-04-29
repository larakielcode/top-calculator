/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1;
let num2;
let oper; // string to store operator
let result; // string to store the math expression
let negateCounter = 1;
let expression;

const add = (a, b) => result = parseInt(a) + parseInt(b);
const sub = (a, b) => result = a - b;
const multiply = (a, b) => result = a * b;
const divide = (a, b) => result = a / b;

const mainDisplay = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");
const clearScreen = document.querySelector("#clear");
const digits = document.querySelectorAll(".digits");
const operator = document.querySelectorAll(".operand");
const compute = document.querySelector("#equals");

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
    num1 = "";
    num2 = "";
    result = "";
    expression = "";
    oper = "";
    displayInitialize();
    /* summaryDisplay.value = "";
    mainDisplay.value = 0; */
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

const negate = document.querySelector(".negate");

/* when pressing a digit */
digits.forEach(btn => btn.addEventListener("click", checkDigit));

/* function to display on screen */
function checkDigit() {
    //set display
    let num = this.textContent;
    showDigit(num);
    displayInitialize();
    //num1 = parseInt(num1); parse num1 to be a number after displaying in screen
    console.clear();
    console.log('%cvalues after display pressing a digit', 'color:yellow');
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
    if (!isNotAllZero(num1)) {
        num1 = ""; // if num1 is all 0 reset the value of num1 to empty
    } else {
        console.log('%cvalue of num1 if user press a digit', 'color:lightblue', num1);
    }

    /* checks for the value of num1 if its empty display it 0 or display the value of num1 */
    //return (num1 == "") ? mainDisplay.value = 0 : mainDisplay.value = num1;
    return (num1 == "") ? num1 = "" : num1;
}
/* Check for a number input that it is not all zero */
let isNotAllZero = (num) => {
    return num * 1 != 0;
};

/* clear all data */
clearScreen.addEventListener("click", clearSc);
function clearSc() {
    //clear the variables
    num1 = "";
    num2 = "";
    oper = "";
    expression = "";
    result = "";

    //clear the screens
    /* mainDisplay.value = 0;
    summaryDisplay.value = ""; */
    displayInitialize();

    console.clear();
    console.log('values after clear the screen');
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
        result = expression;
        num1 = "";
    } else {
        oper = this.textContent;
        num1 = num2;
        result = `${num1} ${oper}`;
        num1 = "";
    }

    console.clear();
    console.log('%cvalues after pressing the operator', 'color:yellow');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
    displayInitialize();
}

/* Code when user click equals */
compute.addEventListener("click", getComputation);
function getComputation() {
    result = `${num2} ${oper} ${num1}`;
    if (num1 != "" && num2 != "" && oper != "") {
        getAnswer();
    } else {
        clearSc();
    }
    displayInitialize();
    console.clear();
    console.log('%cvalues after pressing the equals', 'color:yellow');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var expression ===> ', expression);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
}

/* function for display */
function displayInitialize() {
    if (num1 == "") {
        summaryDisplay.value = result;
        mainDisplay.value = 0;
    } else {
        summaryDisplay.value = result;
        mainDisplay.value = num1;
    }
}

function getAnswer() {
    switch (oper) {
        case '+':
            add(num2, num1);
            num1 = result;
            num2 = num1;
            break;
        case '-':
            sub(num2, num1);
            num1 = result;
            num2 = num1;
            break;
        case 'x':
            multiply(num2, num1);
            num1 = result;
            num2 = num1;
            break;
        case '/':
            divide(num2, num1);
            num1 = result;
            num2 = num1;
            break;
        default:
            break;
    }
}