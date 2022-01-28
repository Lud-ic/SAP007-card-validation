const validator = {
  isValid(cardNumberValue) {
    let arrayCardNumbers = cardNumberValue.split("").map(Number);
    console.log(arrayCardNumbers);

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
    console.log(arrayCardNumbers);

    if (sum % 10 === 0) {
      console.log("valid");
      return true;
    } else {
      console.log("invalid");
      return false;
    }
  },
};

export default validator;
