/* numbers values */
const positive = 2;
const negatives = -5;
const decimal = 0.666;

console.log(
  `positive : ${positive} , negatives : ${negatives} , decimal : ${decimal} `
);

/* math operations */

console.log(`sum : 4 + 2 = ${4 + 2}`);
console.log(`minus : 4 - 2 = ${4 - 2}`);
console.log(`multiple : 4 * 2 = ${4 * 2}`);
console.log(`power : 4 ** 2 = ${4 ** 2}`);
console.log(`divide : 4 / 2 = ${4 / 2}`);
console.log(`precent : 4 % 2 = ${4 % 2}`);
console.log(`NaN : 4 % "" = ${4 % "x"}`); //its NaN : not a number

/* variables */

// we have three type of variables but its recommended to use const or let always
// !!!! never use var because its old !!!!

const firstVariable = 5;
let secondVariable = 10;
secondVariable += firstVariable;
var threeVariable = 6;

console.log(
  `firstVariable : ${firstVariable} --- secondVariable : ${--secondVariable} --- threeVariable : ${++threeVariable}`
);
