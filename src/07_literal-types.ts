// String literal type
type Direction = "up" | "down" | "left" | "right";
let direction: Direction = "up"; // ✅ Valid

// Number literal type
type OneToFive = 1 | 2 | 3 | 4 | 5;
let number: OneToFive = 3; // ✅ Valid

// Combining literal types with union types
type SuccessResponse = {
  status: "success";
  data: "any";
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
