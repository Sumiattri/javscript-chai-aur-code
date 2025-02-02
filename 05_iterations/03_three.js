// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

let myArray = ['1', '2', '3', '4'];

for (const [index, value] of myArray.entries()) {
    console.log(`Value at index ${index} is ${value}`);
}


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);    
// each key-value pair is internally stored as an array within the Map.                                                                    


for (const [key, value] of map) {                //De-Structuting of key, value pair
    // console.log(key, ':-', value);
}

/*
    If you don't use [key, value], you would need to manually access the array elements:
        const countries = new Map([
        ['IN', 'India'],
      ['US', 'United States']
      ]);

    for (const entry of countries) {
    console.log(entry[0], entry[1]); // Manually access key and value from entry array
    }
*/




const myMap = new Map([           // You can also create a Map from an array of arrays
    ["name", "Sumit"],
    ["age", 22], 
    ["city", "Faridabad"]
]);

console.log(myMap);   // Output: Map(3) { 'name' => 'Sumit', 'age' => 22, 'city' => 'Faridabad' }



// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);             // Error: myObject is not iterable directly
    
// }     

// Iterating over a Object by for..of loop
const obj = { a: 1, b: 2, c: 3 };
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);  // a 1, b 2, c 3
}
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);  // a 1, b 2, c 3
}
for (const value of Object.values(obj)) {
  console.log(value);  // 1, 2, 3
}
