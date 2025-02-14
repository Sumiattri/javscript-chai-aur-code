When you write something like:

let xyz = new Something(...);

you are creating an instance of Something.

What does it mean?
	•	new is a keyword in JavaScript that is used to create an instance of a class or constructor function.
	•	Something is usually a constructor function or a class.
	•	The object created is a unique instance of Something, meaning it has its own separate copy of properties and methods.

Example 1: Creating an Object Instance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 25);
let jane = new Person("Jane", 22);

console.log(john.name); // "John"
console.log(jane.name); // "Jane"

Here,
	•	new Person("John", 25) creates a new instance of Person.
	•	Each instance (john, jane) has its own name and age properties.

Example 2: Creating an Array Instance

let arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]

This is the same as writing:

let arr = [1, 2, 3];

The new Array() constructor creates an array instance.

Example 3: Creating a Date Instance

let today = new Date();
console.log(today); // Outputs current date and time

Here, new Date() creates an instance of Date, representing the current date and time.

What is an “Instance”?

An instance is an individual object created from a class or constructor function.
Each instance has its own properties and methods, but they share the same blueprint.

Think of it like a mold and objects:
	•	Person is like a mold (constructor function).
	•	john and jane are unique objects (instances) made from that mold.

Would you like a more advanced explanation on prototypes and how new works internally? 😊