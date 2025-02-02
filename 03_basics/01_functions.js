
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//  sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

console.log(`Result is ${result}`);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){   // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
   return `Username is ${anyobject.username} and price is ${anyobject.prices}`
}

const a = handleObject(user)
console.log(a);

// handleObject(user)

handleObject({
    username: "sam",
    prices: 399
})

function greetUser({ name, age }) {                                 //You can destructure parameters in function definitions:
    console.log(`Hello, ${name}! You are ${age} years old.`);  
}

const user1 = {
    name: "Sumit",
    age: 22,
};

greetUser(user1); // Output: Hello, Sumit! You are 22 years old.


function greetUser({ name :hii, age :yoo }) {
    console.log(`Hello, ${hii}! You are ${yoo} years old.`);
  }
  
  const user2 = {
    name: "Sumit",
    age: 22,
  };
  
  greetUser(user); // Output: Hello, Sumit! You are 22 years old.


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));