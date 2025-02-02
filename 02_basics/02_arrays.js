const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))  // check whether "Hitesh" is an array or not
// console.log(Array.from("Hitesh"))     // creates a new array from an iterable or array-like object("Hitesh")
// console.log(Array.from({name: "hitesh"})) // interesting   // can not create an array from an object cause object is not iterable

// // If you want to convert an object like { name: "hitesh" } into an array, you can use:
// console.log(Array.from(Object.values({ name: "hitesh" }))); // ['hitesh']
// console.log(Array.from(Object.keys({ name: "hitesh" }))); // ['name']
// console.log(Array.from(Object.entries({ name: "hitesh" }))); // [['name', 'hitesh']]


// we can use .from method on objec is it has numeric keys and a length property
console.log(Array.from({ 0: "a", 1: "b", 2:"c", length: 3 })); // ['a', 'b','c]


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

let myArray = ["1", "2", "3", "4", "5"]
/* myArray.entries() : returns an array iterator object with key/value pairs,since .entries() returns an iterator, 
   it doesn't store the values in an array—it just provides them when iterated over*/

//   Internally, myArray.entries() returns something like:
//[
//     [0, '1'],
//     [1, '2'],
//     [2, '3'],
//     [3, '4']
// ]
