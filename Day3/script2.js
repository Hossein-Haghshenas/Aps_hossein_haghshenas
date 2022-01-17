/* quiz */

const dice1 = Math.floor(Math.random() * 6) + 1;

const dice2 = Math.floor(Math.random() * 6) + 1;

const roll = `You rolled a ${dice1} and a ${dice2} they sum to ${
  dice1 + dice2
}`;

console.log(roll);

/* Comparisons */

console.log(`9 == "9" is ${9 == "9"}`);

/* alert(`-5 > -6 is ${-5 > -6}`);

prompt(`6 === "6" is ${6 === "6"}`); */

const parse = parseInt("456535hel44lohossein"); // just number at first

console.log(`parse to int ${parse}`);

/* If statement */

const state = prompt("enter state");
let color;

if (state === "stop") {
  color = "red";
} else if (state === "slow") {
  color = "yellow";
} else if (state === "go") {
  color = "green";
} else {
  color = "purple";
}

console.log(`color is ${color}`);

let isTrue;
let password = prompt("enter password : ");
do {
  if (password.length > 6 && !password.includes(" ")) {
    isTrue = true;
  } else {
    isTrue = false;
    password = prompt("incorrect Please try again !");
  }
} while (!isTrue);
