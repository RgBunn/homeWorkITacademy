// const obj = {};
// console.log(obj);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//     console.log(this.age);
//   }

//   static getClassName() {
//     return "Person";
//   }
// }
// const alice = new Person("Alice");
// alice.greet(); // Hello, my name is Alice
// console.log(Person.getClassName());

class Animal {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`My name is ${this.name}`);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  bark() {
    console.log(`${this.type} ${this.name} barks!`);
  }
}
const rex = new Dog("Rex", "Labrador");
rex.greet();
rex.bark();
