/* strings */

// The String object is used to represent and manipulate a sequence of characters.

// we can use '' or "" or `` for strings
// we most try use one type of it in all program

let string = "hello"; // hello
let firstLetter = string[0]; // h
let concatString = string + firstLetter; // helloh
string += 10; // hello10

console.log(`access to first letter : ${firstLetter}`);
console.log(`length of an string : ${string.length}`);
console.log(`concat string to string: ${concatString}`);
console.log(`concat number to string : ${string}`);

/* STRING METHODS */

const stringUpperCase = "HosSein".toUpperCase();

const stringLowerCase = "HosSein".toLowerCase();

const stringTrim = "   HosSein           ".trim();

const stringIndexOf = "HosSein".indexOf("e");

const stringSlice = "HosSein".slice(1);

const stringReplace = "HosSein".replace("s", "o");

const stringReplaceAll =
  "HosSein and jack go to the jack home for see jack cars ".replaceAll(
    "jack",
    "marry"
  );

const stringRepeat = stringLowerCase.repeat(3);

console.log(`stringUpperCase : ${stringUpperCase}   stringLowerCase : ${stringLowerCase}
  stringTrim : ${stringTrim}      stringIndexOf :  ${stringIndexOf}
 stringSlice : ${stringSlice}     stringReplace : ${stringReplace}    
 stringReplaceAll : ${stringReplaceAll}
  stringRepeat : ${stringRepeat}`);
