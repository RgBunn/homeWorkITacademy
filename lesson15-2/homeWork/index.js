// 1
const arr = [65, -40, 91, 24, 52, 89, 34, 15, 68, 42, -2];
function average(array) {
  // Average number
  const evenNums = array.filter((a) => a % 2 === 0);
  if (evenNums.length === 0) {
    console.log("No even numbers found in the array.");
  } else {
    const averageNum = evenNums.reduce((a, b) => a + b) / evenNums.length;
    console.log(`The average is: ${averageNum}`);
  }
  //  Only positive numbers
  const positiveNums = array.filter((a) => a > 0);
  if (positiveNums.length === 0) {
    console.log("No positive numbers in the array.");
  } else {
    console.log(`Positive numbers array: ${positiveNums}`);
  }
  //   Elements divisible by 3
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
// Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Найти элемент, наиболее близкий к среднему арифметическому массива

const closestNumArr = [11, 20, 38, 36, 40, 26, -24, 9, 0, 18];
function closestNumber(array) {
  //   const average = array.reduce((a, b) => a + b) / array.length;
  //   console.log(`Average value is: ${average}`);

  //   loop approach

  //   let smallestDifference = Infinity;
  //   let difference;
  //   let closestValue;
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] > average) {
  //       difference = array[i] - average;
  //       if (difference < smallestDifference) {
  //         smallestDifference = difference;
  //         closestValue = array[i];
  //       }
  //     } else if (average > array[i]) {
  //       difference = average - array[i];
  //       if (difference < smallestDifference) {
  //         smallestDifference = difference;
  //         closestValue = array[i];
  //       }
  //     }
  //   }
  //   console.log(`Value closest to the average is: ${closestValue}`);

  // methods approach

  //   1calc avg
  const average = array.reduce((a, b) => a + b) / array.length;
  console.log(`Average value is: ${average}`);
  //   2calc differences
  const arrayOfDifferences = array.map(findDifference);

  function findDifference(value, index, array) {
    return value - average;
  }
  //   3 find smallest difference
  const smallestDifference = arrayOfDifferences.reduce(
    (total, value, index, array) => value < total,
    Infinity
  );
  console.log(`smallest differense ${smallestDifference}`);

  //   console.log(`function closest value ${array}, index: ${index}`);
  // goal is to determine which number in the original array corresponds to the smallest difference in arrayOfDifferences.
  // arrayofdifferences>smallestdifference
  console.log(`original array ${array}`);
  console.log(`array Of Differences ${arrayOfDifferences}`);
}
// console.log(closestNumArr);
// console.log(array);

closestNumber(closestNumArr);

// 3
// Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Вычислить сумму элементов между первым и последним нулевыми элементами

// 4
// Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Выполнить сдвиг массива на n элементов вправо. пустые элементы заполнить каким-либо значением

// 5
// Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Найти максимальное количество подряд идущих одинаковых элементов
