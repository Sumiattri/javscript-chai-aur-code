
// Stack memory is used for primitive data types and reference memory(Heap memory) is used for non-primitive data types.

let myYoutubeName = "panther777"

let anotherName = myYoutubeName

anotherName = "SumitAttri"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email : "sumit@google.com",
    upi : "attri@okhdfc"

}

let userTwo = userOne

userTwo.email = "attri@gmail"

console.log(userOne.email);
console.log(userTwo.email);


