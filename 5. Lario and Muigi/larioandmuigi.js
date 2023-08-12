function pipeFix(numbers) {
  let rightMostValue = numbers[numbers.length - 1];
  let leftMostValue = numbers[0];
  let difference = rightMostValue - leftMostValue + 1;
  let newArray = [];
  //   console.log(difference);
  for (let i = leftMostValue; i < rightMostValue + 1; i++) {
    newArray.push(i);
  }
  console.log(newArray);
  return newArray;
}


pipeFix([1,2,3,9]);