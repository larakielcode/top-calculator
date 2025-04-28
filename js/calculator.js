/* 
Author : larakielcode
Date: April 28, 2025


Code starts below
*/

let num1 = "";
let num2 = 0;
let operator = "";

function operate(a, b, oper) {
    return a + oper + b;
}

function refreshScreen(args) {
    if (args === '') {
        document.getElementById("screen").value = '';
    }

    document.getElementById("screen").value = num1;
    console.log(num1);
    console.log(num1.length);
}

function displayOnScreen() {
    if (this.textContent === "C") {
        num1 = "";
        refreshScreen('');
    } else {
        num1 += this.textContent;
        refreshScreen(num1);
    }

}

const buttonContainer = document.querySelector(".buttons");
const buttons = buttonContainer.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", displayOnScreen));
