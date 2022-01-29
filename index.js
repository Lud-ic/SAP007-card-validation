import validator from "./validator.js";

console.log(validator);

let cardNumber = document.getElementById("cardNumber");

const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", function (e) {
  e.preventDefault();

  let cardNumberValue = cardNumber.value.replace(/\D/g, " ");
  console.log(cardNumberValue);
  console.log(typeof cardNumberValue);

  const validationAnswer = document.getElementById("validationAnswer");
  const cardNumberMask = document.getElementById("maskNumber");

  const result = validator.isValid(cardNumberValue);
  console.log(result);
  if (result === true) {
    validationAnswer.style.color = "#149F50";
    validationAnswer.style.fontWeight = "600";
    validationAnswer.textContent = "CARTÃO VÁLIDO";
  } else {
    validationAnswer.style.color = "#FF0F0F";
    validationAnswer.style.fontWeight = "600";
    validationAnswer.textContent = "CARTÃO INVÁLIDO";
  }

  let mascara = validator.maskify(cardNumberValue);
  console.log(mascara, "vc funciona?");
  console.log(typeof mascara, "vc funciona?");
  if (result === true) {
    cardNumberMask.innerHTML = mascara;
  } else {
    cardNumberMask.innerHTML = "Tente outro número";
  }
});
