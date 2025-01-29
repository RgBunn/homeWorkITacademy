"use strict";
// console.log(this);

// console.log();

// const obj = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     console.log(`Hello! My name is ${this.name}`);
//   },
// };

// obj.greet();

// const objArrow = {
//   name: "John",
//   age: 30,
//   greet: () => {
//     console.log(this);
//   },
// };
// objArrow.greet();

const obj = {
  name: "John",
  age: 30,
  greet: function (a = 5) {
    console.log(`Hello! My name is ${this.name}`);
    console.log(a);
  },
};

const obj2 = {
  name: "Nick",
  age: 54,
};

obj.greet.bind(obj2)();

obj.greet.bind({ name: "bind", age: 30 })();
obj.greet.call({ name: "call", age: 30 });
obj.greet.apply({ name: "apply", age: 30 }, [10]);
