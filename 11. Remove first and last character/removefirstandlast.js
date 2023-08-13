function array(string) {
  // TODO
  let splitString = string.split(",");
  //   console.log(splitString);

  splitString.shift();
  splitString.pop();
  console.log(splitString.join(" "));

  if (splitString.join(" ") != "") {
    return splitString.join(" ");
  } else {
    return null;
  }
}

array("this ,is, test, data");
