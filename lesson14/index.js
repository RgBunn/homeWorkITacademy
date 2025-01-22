// let str = "SOME random stRing";

// const arr = str.split(" ");
// arr[1] = arr[1].toUpperCase();
// console.log(arr);

// str = arr.join(" ");
// console.log(str);

// function sayHi(username) {
//   console.log(`Hello, ${username}`);
// }
// sayHi("John");
// sayHi("Jessica");

// const login = prompt();
// sayHi(login);

// function sum(a, b) {
//   console.log("a+b=", a + b);
// }
// sum(10, 20);
// sum(356, 87);

// function math(a, b, c) {
//   console.log("Result is", a + b * c);
// }
// math(2, 3, 4);
// math(4, 3, 2);
// math(3, 2, 4);

// function f(a, ...rest) {
//   console.log(a);
//   console.log(rest);
//   //   console.log(arguments);
// }
// f(1, 3, 4, 3);

// function f(...rest) {
//   console.log(rest);
//   console.log(...rest);
// }
// f(1, 3, 5, 6, 7, 4, 4, 5, 54, 3535, 22);
// console.log(...[1, 3, 5, 6, 7, 4, 4, 5, 54, 3535, 22]);
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// const sumVar = sum(4, 5);
// console.log(sumVar);

// const sum = function (a, b = 0) {
//   return a + b;
// };
// console.log(sum(2, 3));
// console.log(sum(2));

// const sum = (a, b = 0) => a + b;
// console.log(sum(2, 8));
// console.log(sum(2));

// (function () {
//   console.log("Hello World");
// })();
// function hello() {
//   console.log("Hello World");
// }
// hello();

// const str = "qwerty";

// function strUp(str) {
//   let arr = str.split("");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       arr[i] = arr[i].toUpperCase();
//     } else {
//       arr[i] = arr[i].toLowerCase();
//     }
//   }
//   return arr.join("");
//   console.log(arr);
// }
// str = strUp(str);
// console.log(str);

// let str = 'qwErty'

// function strUp (str) {

//     let arr = str.split('')
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {

//         if (i%2===0) {
//             arr[i] = arr[i].toLowerCase()
//         } else {
//             arr[i] = arr[i].toUpperCase()
//         }

//     }

//     return arr.join('')

// }

// str = strUp (str)

// console.log(str);
// const people = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 16 },
//   { name: "Jessica", age: 25 },
// ];
// function isAdult(arr) {
//   const names = [];

//   for (const element of arr) {
//     if (element.age >= 18) {
//       names.push(element.name);
//       // console.log(element.name);
//     }
//   }
//   return names;
// }
// console.log(isAdult(people));

// function sum(number) {
//   let numStr = number.toString();
//   console.log(numStr);

// //   for(let(i=0;))
// }
// sum(123456789);
