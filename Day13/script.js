// 1. Is it Time for Milk and Cookies?

/* Christmas Eve is almost upon us,so naturally we need to prepare some milk and cookies for Santa!
 Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false 
 otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0. */

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24 ? true : false;
}

// 2. Largest Swap

/* Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
On the other hand, swapping 43 gives us 34, and 43 > 34.*/

function largestSwap(num) {
  const reverse = parseInt(num.toString().split("").reverse().join(""));
  return reverse <= num ? true : false;
}

// tests

//1

timeForMilkAndCookies(new Date(2013, 11, 24));
timeForMilkAndCookies(new Date(5513, 11, 24));
timeForMilkAndCookies(new Date(8013, 1, 12));
timeForMilkAndCookies(new Date(2013, 5, 24));
timeForMilkAndCookies(new Date(2011, 11, 11));

//2

largestSwap(27);
largestSwap(43);
largestSwap(53);
largestSwap(99);
largestSwap(28);
