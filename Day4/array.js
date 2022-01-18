/* Array */

/* array is a single variable that is used to store different elements.
 It is often used when we want to store list of elements and access them by a single variable. */

const array = [
  50,
  "hi",
  true,
  undefined,
  { name: "hossein", family: "haghshenas" },
  "hello",
  [0, 1, 2, 3, 4],
];

// console.log(array);

/* ARRAY METHODS */

let array2 = [1, 2, 3, 4, 5];

array2.push(6, 7); // add value to end of array

array2.pop(); // remove value from end of array

array2.unshift(0, 0); // add value to start of array

array2.shift(); // remove value from start of array

console.log(array2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];

const arrConcat = arr1.concat(arr2);

const arrIncludes = arr1.includes(2);

const arrIndexOf = arr1.indexOf(3);

const arrReverse = arr1.reverse();

const arrSlice = arr1.slice(1);

const arrSplice = arr1.splice(1, 1, 5);

const arrSort = arr1.sort();

console.log(
  `arrConcat : ${arrConcat}   arrIncludes : ${arrIncludes} 
  arrIndexOf : ${arrIndexOf}    arrReverse : ${arrReverse} 
  arrSlice : ${arrSlice}    arrSplice : ${arrSplice} 
  arrSort : ${arrSort} `
);
