// let i = 0;

// while (i < 5) {
//   alert(i);
//   i++;
// }

// do {
//   alert(i);
//   i++;
// } while (i < 5);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const arr = [156, 833, 231, 77800, 3652, 177, 88, 52, 8004, 212455665];
// for (let i = 0; i < arr.length; i++) {
//   //   if (arr[index] % 2 === 0 && index % 2 !== 0) console.log(arr[index]);
//   console.log(arr[i] * 2);
//   console.log(arr[i] * 3);
//   if (arr[i] % 6 === 0) {
//     console.log(6);
//     break;
//   }
//   console.log(arr[i] * 4);
//   console.log("-------------");
// }
// for (let i = 0; i < arr.length; i++) {
//   // if (arr[i] % 2 === 0 && i % 2 !== 0) {
//   // 	console.log("i=", i, arr[i]);
//   // }
//   console.log("*2", arr[i] * 2);
//   console.log("*3", arr[i] * 3);
//   if (arr[i] % 6 === 0) {
//     console.log("continue");
//     continue;
//   }
//   console.log("*4", arr[i] * 4);
//   console.log("------------");
// }

// const arr = [351, 154, 284, 36, 874, 43, 685];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       const temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);
// const arr = [156, 833, 231, 77800, 3652, 177, 88, 52, 8004, 212455665];

// for (const i in arr) {
//   console.log(i, arr[i]);
// }

// for (const el of arr) {
//   console.log(el);
// }

// const obj = {
//   name: "John",
// };
// obj.age = 100;
// obj.name = "Jane";
// console.log(obj);

// const cat = {
//   name: "cat",
//   age: 8,
//   kittens: ["Whiskers"],
// };

// const cat2 = Object.create(cat);
// cat2.kittens = ["Whiskers"];
// console.log(cat2);
// console.log(cat2.kittens);

// const keys = Object.keys(cat);
// console.log(keys);

// const values = Object.values(cat);
// console.log(values);

// const entries = Object.entries(cat);
// console.log(entries);

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
// };
// const person2 = person;

// person.age = 33;
// person2.name = "Jane Doe";

// console.log("person", person);
// console.log("person2", person2);

// const person3 = Object.assign(person);

// person3.name = "Jessica";

// console.log("person3", person3);

// const person4 = Object.freeze(person);
// person4.name = "Blah";
// person.lol = true;
// console.log(person);
// console.log(person4);

// const person4=Object.seal(person);

// const person5 = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
// };

// console.log(person5.name);
// console.log(person5["name"]);

// for (const key in person5) {
//   console.log(key);
// }
