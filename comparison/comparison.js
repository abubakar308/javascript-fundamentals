

const userInput = "25"; // string
const expectedAge = 25; // number

console.log(userInput == expectedAge);  // true (loose)
console.log(userInput === expectedAge); // false (strict)

// Loose equality (==) checks value only, not type
// Strict equality (===) checks both value and type