
// Stack memory is used for primitive data types and reference memory(Heap memory) is used for non-primitive data types.

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


