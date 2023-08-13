function arrayPlusArray(arr1, arr2) {
  let counterOne = 0;
  let counterTwo = 0;
  for (let i = 0; i < arr1.length; i++) {
    counterOne += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    counterTwo += arr2[j];
  }

  console.log(counterOne + counterTwo);
  return counterOne + counterTwo;
}

arrayPlusArray([1,2,3],[4,5,6]);