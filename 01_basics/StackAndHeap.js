
// Stack memory is used for primitive data types and reference memory(Heap memory) is used for non-primitive data types.

/*	
    •	Primitive values (number, string, boolean, null, undefined, symbol, bigint) are stored directly in the Stack.
	•	Reference values (object, array, function) are stored in the Heap, and a reference (memory address) is kept in the Stack.
*/

let myYoutubeName = "panther777"

let anotherName = myYoutubeName

anotherName = "SumitAttri"

console.log(myYoutubeName);  // panther777
console.log(anotherName);    // SumitAttri


let userOne = {
    email : "sumit@google.com",
    upi : "attri@okhdfc"

}

let userTwo = userOne

userTwo.email = "attri@gmail"

console.log(userOne.email);  // attri@gmail
console.log(userTwo.email);  // attri@gmail

// ***** IMPORTANT *****   refer the gpt link  https://chatgpt.com/share/67aa3182-1810-8012-805b-bbfb3dde7029 for detailed info about stack and heap memory and 
// how it work along with function call, global execution context, function execution context.
