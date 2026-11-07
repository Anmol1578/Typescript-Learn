// Type assertions

let someValue: unknown = "Hello, TypeScript!";

// Using type assertion to tell TypeScript that someValue is a string
let strLength: number = (someValue as string).length;

let strLength2: number = (<string>someValue).length; // Alternative syntax

// Type guards
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    console.log("String value:", value.toUpperCase());
  } else {
    // TypeScript knows value is a number here
    console.log("Number value:", value.toFixed(2));
  }
}

// instance of type guard
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript knows animal is a Dog here
  } else {
    animal.meow(); // TypeScript knows animal is a Cat here
  }
}
