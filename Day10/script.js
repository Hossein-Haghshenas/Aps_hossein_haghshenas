//1. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addition(num) {
  return ++num;
}

//2. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// !!! Test !!! Don't modify codes below this line

// question 1 tests

/* addition(2);
addition(-9);
addition(0);
addition(999);
addition(73); */

// question 2 tests

/* minMax([14, 35, 6, 1, 34, 54]), [1, 54])
minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
minMax([-54, -23, -54, -21]), [-54, -21])
minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
minMax([0, 0, 0, 0]), [0, 0]) */
