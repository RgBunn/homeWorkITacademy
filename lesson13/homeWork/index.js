// 1
const arr = [3, 3, 5, 5, 5, 8, 0, 9, 8, 1, 2, 3, 2, 4, 5, 1, 6, 4];
let sortedArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!sortedArr.includes(arr[i])) {
    sortedArr.push(arr[i]);
  }
}
console.log(sortedArr);

// 2
const num = 8;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
  console.log(factorial);
}

// 3
const year = 1200;
if (year % 4 === 0) {
  if (year % 400 === 0) {
    console.log(`${year} is a leap year!`);
  } else if (year % 100 === 0) {
    console.log(`${year} is NOT a leap year`);
  } else {
    console.log(`${year} is a leap year!`);
  }
} else {
  console.log(`${year} is NOT a leap year`);
}
// 4
const repeatedArr = ["cat", "dog", "duck", "cat", "cow", "dog", "cow", "cat"];
const count = {};
for (let i = 0; i < repeatedArr.length; i++) {
  let item = repeatedArr[i];
  let itemCount = 0;
  for (let j = 0; j < repeatedArr.length; j++) {
    if (item === repeatedArr[j]) {
      itemCount++;
    }
  }
  count[item] = itemCount;
}
console.log(count);

// 5
const student = {
  name: "Donald",
  age: 16,
  gender: "male",
  hasDriversLicense: false,
};
let keysCount = [];
for (const key in student) {
  keysCount.push(key);
}
console.log(`The object has ${keysCount.length} keys`);

// 6
const allUsers = [
  { name: "John", age: 21 },
  { name: "Harry", age: 29 },
  { name: "Jared", age: 16 },
  { name: "Samantha", age: 30 },
  { name: "Jessica", age: 17 },
];
const usersSorted = [];
for (const el of allUsers) {
  if (el.age >= 18) {
    usersSorted.push(el);
  }
}
console.log(usersSorted);

// 7
const randomArr = [];
for (i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  randomArr.push(randomNumber);
}
console.log(randomArr);

// 8
const randomStr = "Just a random string";
const stringArr = [...randomStr];
const reversedStr = [];

for (i = stringArr.length - 1; i >= 0; i--) {
  reversedStr.push(stringArr[i]);
}
console.log(reversedStr.join(""));
