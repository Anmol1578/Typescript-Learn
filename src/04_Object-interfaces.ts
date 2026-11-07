// Interface

interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property cannot modify just read
}

// Object type annotation
let user: User = {
  name: "Ethan",
  age: 27,
  id: 1,
};

// Interface with Methods

interface Product {
  name: string;
  price: number;
  getDiscount(percent: number): number;
}

let laptop: Product = {
  name: "MacBook Pro ",
  price: 2000,
  getDiscount(percent: number): number {
    return this.price * (percent / 100);
  },
};

export {};
