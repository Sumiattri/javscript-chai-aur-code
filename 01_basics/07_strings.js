//strings are both a primitive data type and can also behave like objects.
/*JavaScript treats strings as objects temporarily when you access string methods (like .length, .toUpperCase(), etc.).
  const str = "Hello, Sumit!";
  console.log(str.toUpperCase()); // "HELLO, SUMIT!"
*/


const name = "hitesh"
const repoCount = 50

 console.log(name +" "+ repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //template literals(string interpolation)
// console.log("Hello my name is" +" "+ name +" "+ "and my repo count is" + " "+ repoCount); //string concatenation(not recommended)

const gameName = new String('hitesh-hc-com') // this methof of creating string is called string constructor which creates a string object

// console.log(gameName[0]);  //  output :"h"
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));       // output : t
//console.log(gameName.indexOf('t'));   // output : 2

//const newString = gameName.substring(0, 4) 
//console.log(newString);                     // output : hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);               //EMPTY STRING

/* basic difference between slice and substring and how slice works
    Feature	                         .slice()	                                .substring()
    Negative Indices	            Supported; counts from the end.         	Not supported; treated as 0.
    Start > End	                    Returns an empty string.	                Swaps startIndex and endIndex.
    Use Case	                    More flexible for advanced use cases.	    Simpler, for basic extractions
*/

const newStringOne = "   hitesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

//console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));




