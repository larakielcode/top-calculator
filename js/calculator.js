/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1 = '';
let num2;
let oper;
let negateCounter = 1;
let result = 0;

const add = (a, b) => result = a + b;
const sub = (a, b) => result = a - b;
const multiply = (a, b) => result = a * b;
const divide = (a, b) => result = a / b;

const display = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");
const digits = document.querySelectorAll(".digits");
const clearScreen = document.querySelector("#clear");
const operator = document.querySelectorAll(".operand");
const negate = document.querySelector(".negate");
const compute = document.querySelector("#equals");

/* code for compute */
compute.addEventListener("click", computeItNow);
function computeItNow() {
    if (oper === "+") {
        add(Number(num2), Number(num1));
        checkNumberFormat(result);
    }
    if (oper === "-") {
        sub(Number(num2), Number(num1));
        checkNumberFormat(result);
    }
    if (oper === "x") {
        multiply(Number(num2), Number(num1));
        checkNumberFormat(result);
    }
    if (oper === "/") {
        if (num1 === "0") {
            result = "TAMBALOSLOS"
            display.value = result;
            result = "";
        } else {
            divide(Number(num2), Number(num1));
            checkNumberFormat(result);
        }
    }
    summaryDisplay.value = `${num2} ${oper} ${num1}`;
    num1 = result;
    oper = undefined;
    console.log(num1);
    console.log(num2);
    console.log(result);
}

/* add a script for formatting display */
function checkNumberFormat(res) {
    if (res % 1 != 0) {
        display.value = result.toFixed(3);
    } else {
        display.value = result;
    }
}

/* negate functionality */
negate.addEventListener("click", (e) => {
    if (negateCounter % 2 == 0) {
        num1 = num1 * -1;
        display.value = num1;
        negateCounter++;
    } else {
        num1 = `-${num1}`;
        display.value = num1;
        negateCounter++;
    }
})

/* when a user clicks an operator in the calculator */
operator.forEach(operate => operate.addEventListener("click", function (e) {
    if (oper === undefined && display.value !== "TAMBALOSLOS") {
        num2 = num1;
        num1 = '';
        oper = this.textContent;
        summaryDisplay.value = `${num2} ${oper}`;
    } else {
        clearSc();
    }
}));

/* display on screen when a user press a digit */
digits.forEach(btn => btn.addEventListener("click", displayOnScreen));

/* function to display on screen */
function displayOnScreen() {
    if (display.value === "TAMBALOSLOS") {
        clearSc();
    }
    if (this.textContent == '0' && num1 == "" && num2 == "") {
        num1 = "";
    } else {
        num1 = num1 === '0' ? this.textContent : num1 + this.textContent;
        display.value = num1;
    }

}

/* code for clearing screens */
clearScreen.addEventListener("click", clearSc);
function clearSc() {
    display.value = 0;
    summaryDisplay.value = '';
    num1 = '';
    num2 = '';
    oper = undefined;
}
