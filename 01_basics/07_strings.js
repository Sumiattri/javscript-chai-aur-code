//strings are both a primitive data type and can also behave like objects.
/*JavaScript treats strings as objects temporarily when you access string methods (like .length, .toUpperCase(), etc.).
  const str = "Hello, Sumit!";
  console.log(str.toUpperCase()); // "HELLO, SUMIT!"
*/


const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //template literals(string interpolation)

const gameName = new String('hitesh-hc-com') // this methof of creating string is called string constructor which creates a string object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




