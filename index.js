// Function to add two numbers using an arrow function
const add = (parameter1, parameter2) => parameter1 + parameter2;

// Function to subtract two numbers using an arrow function
const subtract = (parameter1, parameter2) => parameter1 - parameter2;

// Function to multiply two numbers using an arrow function
const multiply = (parameter1, parameter2) => parameter1 * parameter2;

// Function to divide two numbers using an arrow function
const divide = (parameter1, parameter2) => parameter1 / parameter2;

// Function that uses arrow functions with map to square each number in an array
const squareArray = (nums) => nums.map(x => x ** 2);

// Define an arrow function called "square" that multiplies its parameter by itself
const square = (number) => number * number;

// Export the "square" function
module.exports = { add, subtract, multiply, divide, square, squareArray };


// const numbers = [1, 2, 3];
// const squaredNumbers = squareArray(numbers);
// console.log(squaredNumbers); // Output: [1, 4, 9]