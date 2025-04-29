/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1;
let num2;
let oper; // string to store operator
let negateCounter = 1;
let result; // string to store the math expression

const add = (a, b) => result = a + b;
const sub = (a, b) => result = a - b;
const multiply = (a, b) => result = a * b;
const divide = (a, b) => result = a / b;

const mainDisplay = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");

/* initialize variables and display on load */
window.addEventListener("load", (event) => {
    //dump all values
    console.log('fresh values after window load event');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value); // string 0
    console.log('main display value ===> ', mainDisplay.value); // string 0
    // initialize display
    num1 = 0;
    num2 = 0;
    result = 0;
    oper = "";
    summaryDisplay.value = "";
    mainDisplay.value = num1;
    console.log('values after display initialize');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('main display value ===> ', mainDisplay.value); // string 0
});

const digits = document.querySelectorAll(".digits");
const clearScreen = document.querySelector("#clear");
const operator = document.querySelectorAll(".operand");
const negate = document.querySelector(".negate");
const compute = document.querySelector("#equals");



/* display on screen when a user press a digit */
digits.forEach(btn => btn.addEventListener("click", displayOnScreen));

/* function to display on screen */
function displayOnScreen() {
    let outText = this.textContent;
    if (outText === "0" && mainDisplay.value === "0") {
        outText = "";
        console.log("this is true");
        console.log("displaying outtext when main display ", outText);
        return;
    }
    mainDisplay.value += outText;
    console.log("displaying main Display after 0", mainDisplay.value);
}

/* clear all data */
clearScreen.addEventListener("click", function (e) {
    //clear the variables
    num1 = 0;
    num2 = 0;
    oper = "";
    result = "";

    //clear the screens
    mainDisplay.value = "";
    summaryDisplay.value = "";

    console.log('values after clear the screen');
    console.log('var num1 ===> ', num1);
    console.log('var num2 ===> ', num2);
    console.log('var result ===> ', result);
    console.log('var oper ===> ', oper);
    console.log('summary display value ===> ', summaryDisplay.value);
    console.log('main display value ===> ', mainDisplay.value);
})

