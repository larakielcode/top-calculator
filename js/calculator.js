/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1;
let num2;
let oper; // string to store operator
let result; // string to store the math expression
let zeroCounter = 1;
let negateCounter = 1;

const add = (a, b) => result = a + b;
const sub = (a, b) => result = a - b;
const multiply = (a, b) => result = a * b;
const divide = (a, b) => result = a / b;

const mainDisplay = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");
const digits = document.querySelectorAll(".digits");

/* initialize variables and display on load */
window.addEventListener("load", (event) => {
    //dump all values
    console.log('%cfresh values after window load event', 'color:pink');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
    // initialize display
    num1 = "";
    num2 = "";
    result = "";
    oper = "";
    summaryDisplay.value = "";
    mainDisplay.value = 0;
    console.log('%cvalues after display initialize', 'color:red');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
});

const clearScreen = document.querySelector("#clear");
const operator = document.querySelectorAll(".operand");
const negate = document.querySelector(".negate");
const compute = document.querySelector("#equals");

/* when pressing a digit */
digits.forEach(btn => btn.addEventListener("click", checkDigit));

/* function to display on screen */
function checkDigit() {
    //dump values
    console.log('%cvalues after display pressing a digit', 'color:yellow');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value);

    //set display
    let num = this.textContent;
    showDigit(num);
    //num1 = parseInt(num1); parse num1 to be a number after displaying in screen
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
    return (num1 == "") ? mainDisplay.value = 0 : mainDisplay.value = num1;
}
/* Check for a number input that it is not all zero */
let isNotAllZero = (num) => {
    return num * 1 != 0;
};

/* clear all data */
clearScreen.addEventListener("click", function (e) {
    //clear the variables
    num1 = "";
    num2 = "";
    oper = "";
    result = "";

    //clear the screens
    mainDisplay.value = 0;
    summaryDisplay.value = "";

    console.log('values after clear the screen');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
})

