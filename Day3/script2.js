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

/* quiz 1 */

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

/* quiz 2 */

//way 1
let password = prompt("enter password : ");

if (password.length > 6) {
  if (password.indexOf(" ") === -1) {
    console.log("your password is strong");
  } else {
    console.log("your password contains space");
  }
} else {
  console.log("your password is less than 6 characters");
}

//way 2

/* do {
  if (password.length > 6 && !password.includes(" ")) {
    isTrue = true;
  } else {
    isTrue = false;
    password = prompt("incorrect Please try again !");
  }
} while (!isTrue); */

/* False & true values */

// False  0  (empty string) Null  Undefined  NaN
// Anything that is not False

/* switch */

let value = prompt("whats your name ?");

switch (value) {
  case "hossein":
    console.log("hello welcome hossein");
    break;
  case "hassan":
    console.log("hello welcome hassan");
    break;
  default:
    console.log("its not a name");
    break;
}
