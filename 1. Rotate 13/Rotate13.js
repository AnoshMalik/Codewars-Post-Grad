function rot13(str) {
  alphabetObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  objectKeys = Object.keys(alphabetObject);
  stringArray = str.split("");
  result = "";
  stringArray.forEach((element, index, array) => {
    objectKeys.forEach((secondElement, secondIndex, secondArray) => {
      if (element.toLowerCase() == secondElement) {
        if (secondIndex + 13 > 26) {
          let newIndex = secondIndex + 13 - 26;
          if (newIndex == 0) {
            newIndex = 1;
            if (element == element.toLowerCase()) {
              array.splice(index, 1, secondArray[newIndex]);
            } else {
              array.splice(index, 1, secondArray[newIndex].toUpperCase());
            }
          } else {
            if (element == element.toLowerCase()) {
              array.splice(index, 1, secondArray[newIndex]);
            } else {
              array.splice(index, 1, secondArray[newIndex].toUpperCase());
            }
          }
          // console.log(stringArray.join(""));
        } else {
          if (element == element.toLowerCase()) {
            array.splice(index, 1, secondArray[secondIndex + 13]);
          } else {
            array.splice(index, 1, secondArray[secondIndex + 13].toUpperCase());
          }
          // console.log(stringArray);
        }
      }
    });
  });
  result = stringArray.join("");
  console.log(result);
  return result;
}

rot13("EBG13 rknzcyr.");
