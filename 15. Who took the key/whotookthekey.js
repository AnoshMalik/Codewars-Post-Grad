function whoTookTheCarKey(message) {
  //Find that Freakin' Key!

  let stringArray = [];

  for (let i = 0; i < message.length; i++) {
    let parsedValue = parseInt(message[i], 2);
    stringArray.push(String.fromCharCode(parsedValue));
  }
  console.log(stringArray.join(""));
  return stringArray.join("");
}


whoTookTheCarKey(['01100001' ,'01101110' ,'01101111', '01110011' ,'01101000' ]);