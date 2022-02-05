// 1.Is it Time for Milk and Cookies?

/* Christmas Eve is almost upon us,so naturally we need to prepare some milk and cookies for Santa!
 Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false 
 otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0. */

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24 ? true : false;
}

// tests

timeForMilkAndCookies(new Date(2013, 11, 24));
timeForMilkAndCookies(new Date(5513, 11, 24));
timeForMilkAndCookies(new Date(8013, 1, 12));
timeForMilkAndCookies(new Date(2013, 5, 24));
timeForMilkAndCookies(new Date(2011, 11, 11));
