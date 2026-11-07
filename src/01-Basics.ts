// Primitive

let username: string = "Anmol";
let age: number = 22;
let isAdmin: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Anmol", "Redfield"];

// Tuples
let person: [string, number] = ["Anmol", 27];

//Enum

enum Color {
  Red,
  Green,
  Blue,
}

let favouriteColor: Color = Color.Blue;

// Any (avoid when possible)

let randomValue: any = 10;
randomValue = "Anmol ";
randomValue = true;

// Unknown ( safer than any )
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void ( for functions that dont return )

function subscribe(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullvalue: null = null;
let undefinedValue: undefined = undefined;


export {};