function lowercaseCount(str) {
  //How many?
  let counter = 0;
  let splitString = str.split("");

  for (let i = 0; i < splitString.length; i++) {
    if (/^[a-z]+$/.test(splitString[i])) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}


lowercaseCount("this is test data");