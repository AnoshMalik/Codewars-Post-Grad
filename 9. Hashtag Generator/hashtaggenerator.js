function generateHashtag(str) {
  if (str.length == 0 || str.trim() == "") {
    return false;
  }
  let trimString = str.trim().split(" ");
  console.log(trimString);

  for (let i = 0; i < trimString.length; i++) {
    let capitalised = trimString[i].charAt(0).toUpperCase();
    let subString = trimString[i].substring(1);
    trimString[i] = capitalised + subString;
  }
  let outputResult = trimString.join("");
  if (outputResult.length >= 140) {
    return false;
  } else {
      console.log(`#${trimString.join("")}`);
    return `#${trimString.join("")}`;
  }
}


generateHashtag("Codewars is nice");