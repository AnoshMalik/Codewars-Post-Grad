function isDivisible() {
  //Write your code here
  let argumentsLength = arguments.length;
  let divisibilityCounter = 0;

  for (let i = 1; i < argumentsLength; i++) {
    if (arguments[0] % arguments[i] == 0) {
      divisibilityCounter++;
    }
  }
    if (divisibilityCounter == argumentsLength - 1) {
        console.log(true);
    return true;
    } else {
                console.log(false);

    return false;
  }
}


isDivisible(300,7,4,5);