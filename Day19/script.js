// What is prototype ?

/* The prototype is an object that is associated with every functions and objects by default in JavaScript,
 where function's prototype property is accessible and modifiable and object's prototype property (aka attribute)
  is not visible. Every function includes prototype object by default. 
  
  mdn : Prototypes are the mechanism by which JavaScript objects inherit features from one another.*/

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();

Array.prototype.concat();
String.prototype.charAt();
Object.prototype.hasOwnProperty();
