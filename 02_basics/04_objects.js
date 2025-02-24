// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
//  const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //  output: [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/********   De-Structuring  ********/

// In objects

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

/*   provide default values for missing properties  */

const person = { name: "Sumit" };

const { name, age = 18 } = person;
console.log(name); // "Sumit"
console.log(age); // 18

// De-Structuting in Arrays

const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

/* skipping elements */

const numbers2 = [10, 20, 30];

// Skip the second element
const [first, , third] = numbers2;

console.log(first); // 10
console.log(third); // 30

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
