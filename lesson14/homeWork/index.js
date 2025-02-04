// 1
function isPrime(number) {
  if (number <= 1) {
    console.log("Number is not prime");
    return;
  } else if (number === 2) {
    console.log(`It's a prime number`);
    return;
  } else if (number % 2 === 0) {
    console.log("Number is not prime");
    return;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log("Number is not prime");
      return;
    }
  }
  console.log("It's a prime number");
}
isPrime(4);

// 2
function isPalindrome(str) {
  const string = str.toLowerCase().trim();
  if (string.length > 1) {
    if (string === string.split("").toReversed().join("")) {
      console.log("Your string is Palindrome");
    } else {
      console.log("Your string is NOT Palindrome");
    }
  } else {
    console.log("String must have more than one character");
  }
}
isPalindrome("raceCar   ");
isPalindrome("abcd");
isPalindrome("");

// 3
function uniqueValues(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
const testArr = [1, 2, 2, 3, 3, 1, 5, 8, 8, 3, 9, 0];
console.log(uniqueValues(testArr));

// 4
function sumRange(start, end) {
  let sum = 0;
  if (start > end || start === end) {
    console.log("Start number should be less than end number! Try again.");
  } else {
    for (let i = start; i <= end; i++) {
      sum = sum + i;
    }
    return sum;
  }
}

console.log(sumRange(2, 5));

// 5

function uniqueSymbols(string) {
  const uniqueLetters = [];

  const lettersArray = string.toLowerCase().split("");

  for (let i = 0; i < lettersArray.length; i++) {
    const count = lettersArray.filter((el) => el === lettersArray[i]).length;
    if (count === 1) {
      uniqueLetters.push(lettersArray[i]);
    }
  }
  return uniqueLetters;
}
console.log(uniqueSymbols("Java"));

// 6
function calcArr(num) {
  const randomArr = [];
  let sum = 0;
  if (num === 0) {
    console.log("Please choose numer other than 0");
  } else {
    for (let i = 0; i < num; i++) {
      randomArr.push(Math.floor(Math.random() * 101));
      sum = sum + randomArr[i];
    }
    let maxValue = randomArr[0];
    let minValue = randomArr[0];
    for (let i = 0; i < num; i++) {
      if (randomArr[i] > maxValue) {
        maxValue = randomArr[i];
      } else if (randomArr[i] < minValue) {
        minValue = randomArr[i];
      }
    }

    const average = sum / num;
    console.log(randomArr);
    console.log("Summary is:", sum);
    console.log("Average is:", average);
    console.log("Min value is:", minValue);
    console.log("Max value is:", maxValue);
  }
}
calcArr(3);

// 7
function fibonacciArr(n) {
  const fibonacciArr = [0, 1];
  if (n > 2) {
    for (let i = 2; i < n; i++) {
      fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
    }
    console.log(fibonacciArr);
  }
}

fibonacciArr(10);
