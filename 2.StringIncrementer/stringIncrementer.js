function stringIncrementer(strng) {
  let stringArray = strng.split("");
  let numberBufferArray = [];
  let sum = 0;
  console.log(stringArray);

  for (let i = stringArray.length - 1; i > -1; i--) {
    let intCheck = stringArray[i];
    if (Number.isInteger(parseInt(intCheck))) {
      numberBufferArray.unshift(intCheck);
      // console.log("NumberBufferArray --> " + numberBufferArray);
      stringArray.splice(i, 1, "");

      //   console.log(`${stringArray[i]} : is an number`);
      if (numberBufferArray.length > 1) {
        // for (let numberIndex = 0;numberIndex < numberBufferArray.length - 1;numberIndex++)
        //   sum += numberBufferArray[numberIndex];
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
  console.log(stringArray.join("").concat(sum));
  intArray = [1, 2, 3, 4, 5];
  // console.log(`INT ARRAY JOINED : ${intArray.join("")}`);
}

stringIncrementer("fikar not0145");
