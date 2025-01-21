// 1
const arr = [3, 3, 5, 5, 5, 8, 0, 9, 8, 1, 2, 3, 2, 4, 5, 1, 6, 4];
let sortedArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    continue;
  } else {
    sortedArr.push(arr[i]);
  }
}
console.log(sortedArr);

// 2
