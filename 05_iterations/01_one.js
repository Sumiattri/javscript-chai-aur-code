// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);    // ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
}
for( i=1;i<10;i++ ) {
    console.log(`Table for ${i} is:`);
    for(j=1;j<10;j++){
        console.log(`${i*j}`);
    } 
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


//Iterating over an object: A standard for loop doesn't directly work with objects because objects aren't iterable by default.
//However, you can use Object.entries(), Object.keys(), or Object.values() to get an iterable form of the object (like an array of key-value pairs, keys, or values), which can then be looped over



const obj2 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj2);
console.log(keys);  // [ 'a', 'b', 'c' ]
console.log(obj2["a"]); 


for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key, obj2[key]);  // a 1, b 2, c 3
}


