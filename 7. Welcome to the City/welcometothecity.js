function sayHello(name, city, state) {
  let nameLength = name.length;
  let outputString = "";

  for (let i = 0; i < nameLength; i++) {
    outputString += name[i] + " ";
  }
  console.log(`Hello, ${outputString.trim()}! Welcome to ${city}, ${state}!`);
  return `Hello, ${outputString.trim()}! Welcome to ${city}, ${state}!`;
}

sayHello(["Anosh", "Malik"], "Sheffield", "Timbuktu");
