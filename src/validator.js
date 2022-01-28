const validator = {
  isValid(cardNumberValue) {
    let arrayCardNumbers = cardNumberValue.split("").map(Number);
    console.log(arrayCardNumbers, "Valor do cartao em array");

    let sum = 0;

    for (let i = 0; i < arrayCardNumbers.length; i++) {
      let index = arrayCardNumbers.length - i - 1;
      let valueNumber = arrayCardNumbers[index];
      if (i % 2 === 1) {
        valueNumber *= 2;
        if (valueNumber > 9) {
          valueNumber -= 9;
        }
        arrayCardNumbers[index] = valueNumber;
      }
      console.log(valueNumber, "multipli");
      sum += valueNumber;
    }
    console.log(arrayCardNumbers);

    if (sum % 10 === 0) {
      console.log("valid");
      return true;
    } else {
      console.log("invalid");
      return false;
    }
  },

  maskify(cardNumberValue) {
    let hideNum = [];
    // let arrayCardNumbers = cardNumberValue.split("").map(Number);
    for (let i = 0; i < cardNumberValue.length; i++) {
      if (i < cardNumberValue.length - 4) {
        hideNum.push("#");
      } else {
        hideNum.push(cardNumberValue[i]);
      }
    }
    console.log(hideNum, " /////////");
    return hideNum.join("");
  },
};

export default validator;
