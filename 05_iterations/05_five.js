const coding = ["js", "ruby", "java", "python", "cpp"]


/* .
forEach() is a higher-order function used to iterate over arrays in JavaScript.
   It executes a provided function once for each array element.
   
   array.forEach((element, index, array) => {
   // Code to execute for each element
   });

 */

coding.forEach( function (val){
    console.log(val);               //this function insid forEach is called callback function and it does not have any name
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(`Lnaguage name is ${item.languageName} and file name is ${item.languageFileName}`);
} )