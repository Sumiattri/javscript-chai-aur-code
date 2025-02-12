//classification of data types in done on the basis of how they are stored in memory and how they are accessed

// Javascript is a dynamically typed language and not statically, which means that the data type of a variable can be changed at runtime
// means we do not require to specify the data type of a variable while declaring it
// Similar language called typescript is there which is statically typed language


/* 
     Primitive DATA TYPES
     Also Called  'Call by value':
        When primitive data types (like number, string, boolean, etc.) are passed to a function, a copy of the value is created. Changes inside the function do not affect the original variable.)
            
            let a = 10;
            function modify(x) {
            x = x + 5; // Changing the copy
            console.log("Inside function:", x); // 15
            }
            modify(a);
            console.log("Outside function:", a); // 10 (Original remains unchanged)

*/

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



/* 
    Reference (Non primitive)
    Also Called 'Call by reference':
        When a reference data type (like array, object, function, etc.) is passed to a function, the address of the value is passed. Changes inside the function affect the original variable.
        
            let arr = [1, 2, 3];
            function modify(x) {
            x.push(4); // Changing the original
            console.log("Inside function:", x); // [1, 2, 3, 4]
            }
            modify(arr);
            console.log("Outside function:", arr); // [1, 2, 3, 4] (Original is changed)

*/

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3