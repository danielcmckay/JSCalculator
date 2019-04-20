const input = document.querySelector("input");
window.addEventListener("DOMContentLoaded", focusInput);

function focusInput() {
  input.focus();
}

// Event Listeners and vars
const buttons = document.getElementsByTagName("button");
const buttonGrid = document.querySelector(".button-ui");
buttonGrid.addEventListener("click", getValue);
const clearBtn = document
  .querySelector("#clear")
  .addEventListener("click", clear);
const equalsBtn = document
  .querySelector(".btn-equals")
  .addEventListener("click", evaluateInput);
const deleteBtn = document
  .querySelector(".btn-delete")
  .addEventListener("click", deleteLastInput);
const parenths = document
  .querySelector("#parenths")
  .addEventListener("click", addParenths);
let historyValue;
const historyBtn = document
  .querySelector(".btn-history")
  .addEventListener("click", revertToHistory);
const plusMinusBtn = document
  .querySelector("#plusMinus")
  .addEventListener("click", changePlusMinus);

// Button value to input
function getValue(e) {
  let buttonValue = e.target;

  
  if (buttonValue.className !== 'btn-equals' && input.className === "answer") {
    clear();
  }


  if (buttonValue.className === "num" || buttonValue.className === "operator") {
    input.value += buttonValue.value;
  }
}

// Clear Button
function clear() {
  input.className = "";
  input.value = "";
}

// Equals Button
function evaluateInput() {
  let newInput;
  historyValue = input.value;

  try {
    newInput = eval(input.value);
    input.className = "answer";
    input.value = newInput;
    console.log(historyValue);
  } catch {
    alert("Invalid format used");
    clear();
  }
}

// Delete Button
function deleteLastInput(e) {
  let inputArr = Array.from(input.value);
  inputArr.pop();
  const newInput = inputArr.join("");
  input.value = newInput;
}

// Parenths Button
function addParenths() {
  input.value = `(${input.value})`;
}

// History Button
function revertToHistory(e) {
  if (historyValue == "undefined") {
    input.value = "";
  } else input.value = historyValue;
}

// Plus/Minus btn
function changePlusMinus(e) {
  if (input.value >= 0) {
    input.value = `(-${input.value})`;
  } else {
    input.value = Math.abs(input.value);
  }
}
