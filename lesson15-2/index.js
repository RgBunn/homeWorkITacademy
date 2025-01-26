// const arr = [1, 34, 35, 35, 2, 25, 6, 85, 8, 747, 1123, 45];
// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// function hello(name) {
//   console.log(`Hello, ${name}`);
// }
// function input(callback) {
//   const name = prompt("Enter your name");
//   callback(name);
// }
// input(hello);

// function AtoB(nextPoint) {
//   const transport = "bus";
//   const friend = "John Doe";
//   nextPoint(transport, friend);
//   //   console.log(nextPoint);
//   // console.log('aTOb function');
// }
// function BtoC(transport, friend) {
//   console.log(`We are traveling by ${transport} with ${friend}`);
// }
// AtoB(BtoC);

// const createPlayer = (initialScore) => {
//   let score = initialScore; // Приватная переменная**
//   return {
//     getScore: function () {
//       return score;
//     },
//     addScore: function (amount) {
//       score += amount;
//     },
//   };
// };
// const player1 = createPlayer(100);
// console.log(player1.getScore()); // 100
// player1.addScore(50);
// console.log(player1.getScore()); // 150

// const arr = [31, 44, 5, 2, 5, 6, 444, 32];
// const resultSome = arr.some((el) => el % 3 === 0);
// console.log(resultSome);

// const resultSome2 = arr.some(f);

// function f(el) {
//   return el % 3 === 0;
// }

// console.log(resultSome2);

// const arr = [31, 44, 5, 2, 5, 6, 444, 32];

// let res = false;
// for (let i = 0; i < arr.length; i++) {
//   const isTrue = f(arr[i]);
//   if (f(arr[i]) === true) {
//     res = true;
//     break;
//   }
// }

// function f(element) {
//   if (element % 3 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(res);

// const arr = [31, 44, 5, 2, 5, 6, 444, 32];
// const resultEvery = arr.every((el) => el > 0);
// console.log(resultEvery);
// const resultFilter = arr.filter((el) => el % 3 === 0);
// console.log(resultFilter);
// const resultSort = arr.sort((a, b) => b - a);
// console.log(resultSort);
// const toFlatArr = [[1, 2, 3], [35, 3242, 34], 7];
// const flatArr = toFlatArr.flat();
// console.log(flatArr);

// arr.forEach((el) => {
//   console.log(el * 2);
// });

// const resultMap = arr.map((el) => el * 2);
// console.log(resultMap);

// const flatMapArr = [[2], [3], [5], [8], [4]];
// const resultFlatMAp = flatMapArr.flatMap((el) => el * 8);
// console.log(resultFlatMAp);

const arr = [31, 44, 5, 2, 5, 6, 888, 32];
// arr.forEach((el, i, arr) => {
//   console.log(el);
//   console.log(i);
//   console.log(arr);
// });

// const resultFind = arr.find((el) => el === 888);
// console.log(resultFind);

// const resultFindIndex = arr.findIndex((el) => el === 888);
// console.log(resultFindIndex);

const sum = arr.reduce((acc, el) => acc + el, 0);
console.log(sum);
