var filterString = function (value) {
  //Complete this function :)

  let splitValue = value.split("");
  let numbers = [];
//   console.log(splitValue);

  for (let i = 0; i < splitValue.length; i++) {
    let checkNumber = typeof splitValue[i];
    if (isNaN(splitValue[i]) == false) {
      numbers.push(splitValue[i]);
    }
  }

  console.log(numbers.join(""));
  return parseInt(numbers.join(""));
};

filterString("aeior1234");