import validator from "./validator.js";

let cardNumber = document.getElementById("cardNumber");

const validate = document.getElementById("buttonValidate");

validate.addEventListener("click", function (e) {
  e.preventDefault();

  let cardNumberValue = cardNumber.value.replace(/\D/g, " ");

  const validationAnswer = document.getElementById("validationAnswer");
  const cardNumberMask = document.getElementById("maskNumber");

  const result = validator.isValid(cardNumberValue);

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

  if (result === true) {
    cardNumberMask.innerHTML = mascara;
  } else {
    cardNumberMask.innerHTML = "Tente outro número";
  }
});
