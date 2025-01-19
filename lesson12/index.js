// const arr = [1, "two", null, true, { a: 2 }, [1, 2, 3]];
// // console.log(arr[4]);
// // const obj = arr[4];
// // console.log(obj);
// console.log(arr[5][1]);
// const obj2 = arr[5][2];
// console.log(obj2);

const arr = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

// console.log(arr.concat(arr2, 111, "LOL"));
// const elemsCount = arr.push("five", "six", "seven", "eight");
// console.log(arr);
// console.log(elemsCount);

// const elemsCount = arr.unshift("five", "six", "seven", "eight");
// console.log(arr);
// console.log(elemsCount);

// const popped = arr.pop();
// console.log(arr);
// console.log(popped);

// const shifted = arr.shift();
// console.log(arr);
// console.log(shifted);

// arr.reverse();
// console.log(arr);

// const revArr = arr.toReversed();
// console.log(arr);
// console.log(revArr);
// console.log("arr", arr);
// const arrSlice = arr.slice(1, 4);
// console.log("arr slice", arrSlice);
// const arrSplice = arr.splice(1, 3, 11, 22, 33);
// console.log("arr splice", arrSplice);
// console.log("arr", arr);

// const age = 18;
// if (age > 18) {
//   //   console.log("Welcome!");
//   console.log(">18");
// } else if (age < 18) {
//   //   console.log("Access denied!");
//   console.log("<18");
// } else {
//   console.log("=18");
// }

// const name = "John";

// if (name !== "John") {
//   //   console.log("Back off");
//   console.log("Welcome!");
// } else {
// }

// const a = 45;
// const b = 78;
// const name = "John";
// if (a % 2 === 0 && b % 2 === 0 && name === "John") {
//   console.log("Both numbers are even, and the name is John");
// } else {
//   console.log("Either the numbers are not even, or the name is not John");
// }
const userName = "John";

switch (userName) {
  case "John":
    console.log("Welcome, John!");
    break;
  case "Jack":
    console.log("Welcome, Jack!");
    break;
  case "Nick":
    console.log("Welcome, Nick!");
    break;
  case "Mike":
    console.log("Welcome, Mike!");
    break;

  default:
    console.log("Unknown user");
    break;
}
