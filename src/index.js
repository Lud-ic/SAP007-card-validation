import validator from "./validator.js";

console.log(validator);

const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", function (e) {
  e.preventDefault();

  const cardNumber = document.getElementById("cardNumber");

  const cardNumberValue = cardNumber.value;
  console.log(cardNumberValue);
});
