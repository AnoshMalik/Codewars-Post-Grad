function stringIncrementer(strng) {
  let stringArray = strng.split("");
  let numberBufferArray = [];
  let sum = 0;
  let zeroArray = [];
  console.log(stringArray);

  for (let i = stringArray.length - 1; i > -1; i--) {
    let intCheck = stringArray[i];
    if (Number.isInteger(parseInt(intCheck))) {
      numberBufferArray.unshift(intCheck);
      // console.log("NumberBufferArray --> " + numberBufferArray);
      stringArray.splice(i, 1, "");

      //   console.log(`${stringArray[i]} : is an number`);
      if (numberBufferArray.length > 0) {
        // for (let numberIndex = 0;numberIndex < numberBufferArray.length - 1;numberIndex++)
        //   sum += numberBufferArray[numberIndex];
        for (let i = 0; i < numberBufferArray.length; i++) {
          if (numberBufferArray[i] == 0) {
            numberBufferArray.splice(i, 1, "");
            zeroArray.push(0);
          }
        }
        sum = parseInt(numberBufferArray.join(""));
        console.log("sum joined --> " + ++sum);
      } else {
        sum = intCheck++;
        // console.log(sum);
      }
    } else {
      //   console.log(`${stringArray[i]} : is an alphabet`);
    }
  }
  console.log(stringArray.join("").concat(zeroArray.join(""), sum));
}

stringIncrementer("fikar not00105");
