// 1
const arr = [65, -40, 91, 24, 52, 89, 34, 15, 68, 42, -2];
function average(array) {
  const evenNums = array.filter((a) => a % 2 === 0);
  if (evenNums.length === 0) {
    console.log("No even numbers found in the array.");
  } else {
    const averageNum = evenNums.reduce((a, b) => a + b) / evenNums.length;
    console.log(`The average is: ${averageNum}`);
  }
  const positiveNums = array.filter((a) => a > 0);
  if (positiveNums.length === 0) {
    console.log("No positive numbers in the array.");
  } else {
    console.log(`Positive numbers array: ${positiveNums}`);
  }
  const numsDivisibleBy3 = array.filter((a) => a % 3 === 0);
  if (numsDivisibleBy3.length === 0) {
    console.log("No numbers divisible by 3 found in the array.");
  } else {
    const sumOfDivisibleBy3 = numsDivisibleBy3.reduce((a, b) => a + b);
    console.log(`Summary of elements divisible by 3: ${sumOfDivisibleBy3}`);
  }
}
average(arr);

// 2
const closestNumArr = [111, 20, 38, 364, 401, 26, -24, 9, 0, 18];

function findClosestElement(array) {
  const average = array.reduce((a, b) => a + b) / array.length;
  console.log(`The average is: ${average}`);
  const differences = array.map((el) => Math.abs(el - average));
  console.log(`Array of differences: ${differences}`);
  const minDifference = differences.reduce((acc, curValue, index) => {
    return curValue < acc ? curValue : acc;
  }, Infinity);
  console.log(`min difference is ${minDifference}`);
  const minIndex = differences.indexOf(minDifference);
  const closestElement = array[minIndex];
  console.log(`Closest element is: ${closestElement}`);
}
findClosestElement(closestNumArr);

// 3
const arrayWithZeros = [
  2, 8, 3, 0, 23, 7, 4, 0, 8, 1, 86, 54, 83, 10, 0, 7, 4, 3,
];
function betweenZeros(array) {
  if (array.includes(0)) {
    const firstZero = array.indexOf(0);
    const lastZero = array.lastIndexOf(0);
    console.log(firstZero, lastZero);
    if (firstZero !== lastZero) {
      const numbersBetweenZeros = array.slice(firstZero + 1, lastZero);
      console.log(`Numbers between zeros array ${numbersBetweenZeros}`);

      const sum = numbersBetweenZeros.reduce((a, b) => a + b, 0);
      console.log(sum);
    } else {
      console.log(`Please check your array`);
    }
  }
}
betweenZeros(arrayWithZeros);
// 4

const arrayToMove = [1, 2, 3, 4, 5];
function moveArray(array, amount) {
  for (let i = 0; i < amount; i++) {
    array.unshift("Empty space");
  }
  console.log(array);
}
moveArray(arrayToMove, 3);

// 5
const arrayElementsInRow = [1, 1, 1, 2, 3, 3, 4, 5, 5, 5];

function findElementsInARow(array) {
  let maxStreak = 1;
  array.reduce((acc, curValue, index, array) => {
    if (curValue === array[index + 1]) {
      acc += 1;
      if (acc > maxStreak) {
        maxStreak = acc;
      }
    } else {
      acc = 1;
    }
    return acc;
  }, 1);
  return maxStreak;
}
findElementsInARow(arrayElementsInRow);
console.log(findElementsInARow(arrayElementsInRow));
