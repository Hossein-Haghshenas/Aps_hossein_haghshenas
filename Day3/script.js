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

// some methods give argument in ()  like to .replace(arg,arg);

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

let practic = "skateboard";
practic = practic.replace("skatebo", "be");

console.log(`practic result is : ${practic}`);

/* EXPRESSIONS VS STATEMENTS */

5 + 5; // its EXPRESSIONS because YOU CAN PLACE IT ON THE RIGHT HAND SIDE OF AN ASSIGNMENT

const welcome = "hello"; // its STATEMENTS because This is an instruction to store the value in the variable

/* NULL & UNDEFINED */

/* In JavaScript, undefined is a type, null is an object.
 It means a variable declared, but no value has been assigned a value.
  Whereas, null in JavaScript is an assignment value. */

/* How do I get undefined in JavaScript?
 You will get undefined value when you call a non-existent property or method of an object.
 In the above example, a function Sum does not return any result but 
 still we try to assign its resulted value to a variable. So in this case, result will be undefined */

const NULL = null; // Values that are intentionally left blank

const UNDEFINED = Math.sum; //Values that are not defined at all

console.log(`NULL is ${NULL} and UNDEFINED is ${UNDEFINED}`);
