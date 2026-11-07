"use strict";
// Primitive
let username = "Anmol";
let age = 22;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Anmol", "Redfield"];
// Tuples
let person = ["Anmol", 27];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favouriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "Anmol ";
randomValue = true;
// Unknown ( safer than any )
let userInput;
userInput = 5;
userInput = "text";
// Void ( for functions that dont return )
function subscribe(message) {
    console.log(message);
}
// Null and Undefined
let nullvalue = null;
let undefinedValue = undefined;
//# sourceMappingURL=01-Basics.js.map