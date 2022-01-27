const validator = {
  isValid() {
    // e.preventDefault();

    let cardNumber = document.getElementById("cardNumber");

    let cardNumberValue = cardNumber.value;
    console.log(cardNumberValue);
    console.log(typeof cardNumberValue);

    // let arrayCardNumbers = cardNumberValue.toString().split("").map(Number);
    let arrayCardNumbers = cardNumberValue.split("").map(Number);
    console.log(arrayCardNumbers);

    // if (arrayCardNumbers.length % 2 === 0) {
    //   arrayCardNumbers = arrayCardNumbers.map((key, value) =>
    //     value % 2 === 0 ? arrayCardNumbers * 2 : arrayCardNumbers
    //   );
    //   console.log("o que tá rolando");
    // } else {
    //   arrayCardNumbers = arrayCardNumbers.map((key, value) =>
    //     value % 2 === 1 ? arrayCardNumbers * 2 : arrayCardNumbers
    //   );
    //   console.log("que que tá acontendo");
    // }

    //Par even
    // if (arrayCardNumbers.length % 2 === 0) {
    // let i = 0;
    let sum = 0;
    // for (let i = arrayCardNumbers.length - 1; i > -1; i--) {
    //   let valueNumber = arrayCardNumbers[i];
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
      // i++;
    }
    console.log(arrayCardNumbers);

    if (sum % 10 === 0) {
      console.log("valid");
      return true;
    } else {
      console.log("invalid");
      return false;
    }

    // }
  },
};

export default validator;
