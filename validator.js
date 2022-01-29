const validator = {
  isValid(cardNumberValue) {
    let arrayCardNumbers = cardNumberValue.split("").map(Number);

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

      sum += valueNumber;
    }

    if (sum % 10 === 0 && cardNumberValue !== "" && sum !== 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify(cardNumberValue) {
    let hideCardNum = [];

    for (let i = 0; i < cardNumberValue.length; i++) {
      if (i < cardNumberValue.length - 4) {
        hideCardNum.push("#");
      } else {
        hideCardNum.push(cardNumberValue[i]);
      }
    }

    return hideCardNum.join("");
  },
};

export default validator;
