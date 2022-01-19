const validator = {
  cardNumber(e) {
    e.preventDefault();

    const cardNumber = document.getElementById("cardNumber");

    const cardNumberValue = cardNumber.value;
    console.log(cardNumberValue);
  },
};

export default validator;
