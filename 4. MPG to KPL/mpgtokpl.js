function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter

  let km = mpg * 1.609344;
  console.log(km / 4.54609188);
  return parseFloat((km / 4.54609188).toFixed(2));
}


converter(13);