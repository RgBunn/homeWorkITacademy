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

const createPlayer = (initialScore) => {
  let score = initialScore; // Приватная переменная**
  return {
    getScore: function () {
      return score;
    },
    addScore: function (amount) {
      score += amount;
    },
  };
};
const player1 = createPlayer(100);
console.log(player1.getScore()); // 100
player1.addScore(50);
console.log(player1.getScore()); // 150
