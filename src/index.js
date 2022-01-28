import validator from "./validator.js";

console.log(validator);

let cardNumber = document.getElementById("cardNumber");

let cardNumberValue = cardNumber.value;
console.log(cardNumberValue);
console.log(typeof cardNumberValue);
const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", validator.isValid(cardNumberValue));
