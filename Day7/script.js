/* 1. Write a functions to say which one of functions in argument return bigger than number 
and return this function names with string like to : "g".

if it was equal return "neither" */

function whichIsLarger(f, g) {
  return f() > g() ? "f" : g() > f() ? "g" : "neither";
}

/* 2. Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers. */

function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

/* 3. Write a function that mimics (without the use of <<) the left shift operator 
and returns the result from the two given integers. */

function shiftToLeft(x, y) {
  return x * Math.pow(2, y);
}

// !!! Don't modify code below this line !!!

/* question 1 tests */

Test.assertEquals(
  whichIsLarger(
    () => 5,
    () => 10
  ),
  "g"
);
Test.assertEquals(
  whichIsLarger(
    () => 10,
    () => 5
  ),
  "f"
);
Test.assertEquals(
  whichIsLarger(
    () => 25,
    () => 25
  ),
  "neither"
);
Test.assertEquals(
  whichIsLarger(
    () => -100,
    () => -100
  ),
  "neither"
);
Test.assertEquals(
  whichIsLarger(
    () => -100,
    () => 0
  ),
  "g"
);
Test.assertEquals(
  whichIsLarger(
    () => 505050,
    () => 5050
  ),
  "f"
);
Test.assertEquals(
  whichIsLarger(
    () => 100,
    () => 1000
  ),
  "g"
);

/* question 2 tests */

Test.assertEquals(bitwiseAND(7, 12), 4);
Test.assertEquals(bitwiseOR(7, 12), 15);
Test.assertEquals(bitwiseXOR(7, 12), 11);

Test.assertEquals(bitwiseAND(32, 17), 0);
Test.assertEquals(bitwiseOR(32, 17), 49);
Test.assertEquals(bitwiseXOR(32, 17), 49);

Test.assertEquals(bitwiseAND(13, 19), 1);
Test.assertEquals(bitwiseOR(13, 19), 31);
Test.assertEquals(bitwiseXOR(13, 19), 30);

/* question 3 tests */

const opCheck = (f) => !`${f}`.match(RegExp("<<", "gm"));
Test.assertNotEquals(
  opCheck(shiftToLeft),
  false,
  "The use of left shift operator (<<) is prohibited!"
);

let [numVector, resVector] = [
  [
    [5, 2],
    [10, 3],
    [-32, 2],
    [-6, 5],
    [12, 4],
    [46, 6],
    [57, 0],
    [79, 1],
  ],
  [20, 80, -128, -192, 192, 2944, 57, 158],
];
for (let i in numVector)
  Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i]);
