import validator from "./validator.js";

console.log(validator);

let cardNumber = document.getElementById("cardNumber");

const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", function (e) {
  e.preventDefault();
  let cardNumberValue = cardNumber.value.replace(/\D/g, " ");
  console.log(cardNumberValue);
  console.log(typeof cardNumberValue);
  console.log(cardNumberValue, "testes");
  const result = validator.isValid(cardNumberValue);
  console.log(result);

  let mascara = validator.maskify(cardNumberValue);
  console.log(mascara, "vc funciona?");
});
