/* This challenge will help you interpret mathematical relationships both algebraically and geometrically.
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses that have been connected together. */

function matchHouses(step) {
  let i = 1;
  i += 1;
  return step != 0 ? step * 5 + 1 : 0;
}

/* !!!! test don't modify code below this line */

matchHouses(1);
matchHouses(0);
matchHouses(17);
matchHouses(36);
matchHouses(15);
matchHouses(99);
matchHouses(3);
matchHouses(87);
