import validator from "./validator.js";

const cardNumber = document.getElementById("cardNumber");
const validate = document.getElementById("buttonValidate");
const validationAnswer = document.getElementById("validationAnswer");
const cardNumberMask = document.getElementById("maskNumber");

validate.addEventListener("click", (e) => {
  e.preventDefault();

  const cardNumberValue = cardNumber.value.replace(/\D/g, " ");
  const result = validator.isValid(cardNumberValue);
  const mascara = validator.maskify(cardNumberValue);

  if (result === true) {
    validationAnswer.classList.remove("invalid");
    validationAnswer.classList.add("valid");
    validationAnswer.textContent = "CARTÃO VÁLIDO";
    cardNumberMask.innerHTML = mascara;
  } else {
    validationAnswer.classList.remove("valid");
    validationAnswer.classList.add("invalid");
    validationAnswer.textContent = "CARTÃO INVÁLIDO";
    cardNumberMask.innerHTML = "Tente outro número";
  }
});
