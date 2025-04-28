/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector("#screen");
const digits = document.querySelectorAll(".digits");
const clearScreen = document.querySelector("#clear");
const operator = document.querySelectorAll(".operand");

let num1 = '';
let num2;
let oper;


digits.forEach(btn => btn.addEventListener("click", displayOnScreen));
clearScreen.addEventListener("click", () => {
    display.value = 0;
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

console.log(num1);