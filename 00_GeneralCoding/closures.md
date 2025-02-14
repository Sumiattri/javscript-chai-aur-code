Closure in JavaScript

A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope.

Understanding Closures

When a function is created inside another function, the inner function has access to:
	1.	Its own variables
	2.	Variables of the outer function
	3.	Global variables

Even after the outer function has finished execution, the inner function retains access to the outer function’s variables. This is what makes closures powerful.

Example of Closure

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World

Here, innerFunction forms a closure by “remembering” outerVariable, even after outerFunction has executed.

Why Use Closures?
	1.	Data Encapsulation: Helps create private variables.
	2.	Function Factories: Allows creating multiple functions with different scopes.
	3.	Event Handling & Callbacks: Useful in async programming.

Practical Example: Counter with Closures

function createCounter() {
    let count = 0; // Private variable
    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

Even though createCounter has finished execution, the inner function still has access to count, which makes it a closure.

Would you like more examples or use cases? 😊