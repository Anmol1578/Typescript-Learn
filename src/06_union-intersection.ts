// Union types (OR)

type Status = "active" | "inactive" | "pending";

function setStatus(status: Status) : void{
  console.log(`Status set to: ${status}`);
}

setStatus("active"); // ✅ Valid


// Intersection types (AND)

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let myCircle: ColorfulCircle = {
    color: "red",
    radius: 10
};

console.log(`My circle is ${myCircle.color} and has a radius of ${myCircle.radius}`);