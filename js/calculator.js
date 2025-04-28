/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let num1 = '';
let num2;
let oper;
let negateCounter = 1;


const display = document.querySelector("#screen");
const summaryDisplay = document.querySelector("#displaySum");
const digits = document.querySelectorAll(".digits");
const clearScreen = document.querySelector("#clear");
const operator = document.querySelectorAll(".operand");
const negate = document.querySelector(".negate");

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

operator.forEach(operate => operate.addEventListener("click", function (e) {
    console.log(oper);
    num2 = num1;
    summaryDisplay.value = num2;
    if (oper === undefined) {
        num2 = num1;
        num1 = '';
        oper = this.textContent;
        console.log(num1);
        console.log(num2);
        console.log(oper);
    }

}))

digits.forEach(btn => btn.addEventListener("click", displayOnScreen));

clearScreen.addEventListener("click", () => {
    display.value = 0;
    summaryDisplay.value = '';
    num1 = '';
    num2 = '';
});

function displayOnScreen() {
    if (this.textContent == '0' && num1 == "") {
        num1 = '';
    } else {
        num1 += this.textContent;
        display.value = num1;
    }

}
