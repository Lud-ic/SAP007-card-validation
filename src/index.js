import validator from "./validator.js";

console.log(validator);

const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", validator.isValid);
