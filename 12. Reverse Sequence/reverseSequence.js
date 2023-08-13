const reverseSeq = (n) => {
  let reverseArray = [];
  for (let i = n; i > 0; i--) {
    reverseArray.push(i);
  }
  console.log(reverseArray);
  return reverseArray;
};


reverseSeq(10);