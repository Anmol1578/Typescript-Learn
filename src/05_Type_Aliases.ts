
// ==========================================
// 1. TYPE ALIAS
// ==========================================

// Type alias gives a name to a type.

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "Laptop",
  price: 50000,
};


// ==========================================
// 2. TYPE ALIAS WITH UNION
// ==========================================

// A type alias can represent multiple types.

type ID = string | number;

let id1: ID = 101;
let id2: ID = "USER101";


// ==========================================
// 3. INTERFACE
// ==========================================

// Interface describes the structure of an object.

interface Person {
  name: string;
}


// ==========================================
// 4. INTERFACE EXTENDS
// ==========================================

// Employee gets "name" from Person
// and adds "salary".

interface Employee extends Person {
  salary: number;
}

const employee: Employee = {
  name: "Rahul",
  salary: 50000,
};


// ==========================================
// 5. INTERFACE DECLARATION MERGING
// ==========================================

// Same interface can be declared twice.
// TypeScript merges them together.

interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Car now has:
// brand + model

const car: Car = {
  brand: "Toyota",
  model: "Fortuner",
};


// ==========================================
// 6. TYPE ALIAS CANNOT MERGE
// ==========================================

// ❌ Not allowed:
//
// type Book = {
//   title: string;
// };
//
// type Book = {
//   price: number;
// };
//
// Error: Duplicate identifier 'Book'


// ==========================================
// QUICK REVISION
// ==========================================

// type      → flexible, supports union types
// interface → object structure
// extends   → interface inheritance
// merging  → interfaces can merge
// type      → cannot be declared twice

