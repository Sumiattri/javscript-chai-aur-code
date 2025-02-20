What is a Callback Function in JavaScript?

A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation is completed.

Why Use Callbacks?

JavaScript is asynchronous, meaning some operations (like fetching data or reading a file) take time. Instead of waiting for these operations to finish, JavaScript uses callbacks to execute another function once the operation is done.

Basic Example of a Callback Function

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();  // Calling the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sumit", sayGoodbye);

Output:

Hello, Sumit
Goodbye!

Here, sayGoodbye is passed as a callback to greet, and it is executed after greeting.

Callback in Asynchronous JavaScript (setTimeout Example)

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();  // Calling the callback after fetching data
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);

Output (after 2 seconds delay):

Data fetched!
Processing data...

Here, processData is executed after fetchData is completed.

Callback in Real-World Example (Simulating an API Call)

function getUserData(userId, callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
        let user = { id: userId, name: "John Doe" };
        callback(user);
    }, 2000);
}

function displayUser(user) {
    console.log(`User ID: ${user.id}, Name: ${user.name}`);
}

getUserData(101, displayUser);

Output (after 2 seconds delay):

Fetching user data...
User ID: 101, Name: John Doe

Here, displayUser is called after the user data is fetched.

Callback Hell (Nested Callbacks)

If multiple callbacks are used inside each other, it becomes hard to read and maintain. This is known as callback hell.

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed!");
        });
    });
});

Output (each step completes after 1 second):

Step 1 completed
Step 2 completed
Step 3 completed
All steps completed!

👉 Solution to Callback Hell: Use Promises or Async/Await instead of deeply nested callbacks.

Summary
	•	Callback functions are functions passed as arguments to other functions and executed later.
	•	They help in handling asynchronous operations.
	•	Too many nested callbacks lead to callback hell, which can be avoided using Promises or Async/Await.

Would you like me to explain Promises or Async/Await next? 😊

## why callback.........................................


Yes, you’re right! Instead of passing sayGoodbye as a callback, we could directly call it inside greet, like this:

function greet(name) {
    console.log(`Hello, ${name}`);
    console.log("Goodbye!");  // Directly calling goodbye
}

greet("Sumit");

Output:

Hello, Sumit
Goodbye!

So Why Use a Callback?

Using a callback function makes the code more flexible and reusable because it allows different functions to be executed dynamically.

Example: Using Different Callbacks

function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();  // Calling different functions dynamically
}

function sayGoodbye() {
    console.log("Goodbye!");
}

function askHowAreYou() {
    console.log("How are you?");
}

greet("Sumit", sayGoodbye);
// Output: Hello, Sumit
//         Goodbye!

greet("Sumit", askHowAreYou);
// Output: Hello, Sumit
//         How are you?

Why This is Useful?
	1.	Reusability – Instead of hardcoding a function, we can pass any function as a callback.
	2.	Asynchronous Operations – In real-world scenarios (like fetching data from a server), we don’t know how long an operation will take. Callbacks help handle these situations efficiently.

So, while calling sayGoodbye directly works, using callbacks gives us more control and flexibility in different situations. 🚀
