/* function */

/* A function in JavaScript is similar to a procedure—a set of statements 
that performs a task or calculates a value, but for a procedure to qualify as a function,
 it should take some input and return an output where there is 
 some obvious relationship between the input and the output. */

/* 1.Define 2.Run (execute) *Order doesn‟t matter (Good if you define your functions before use it) */

/* 
 Define :

 function sum(argument (input) ) {   
  return (output)
 }

 execute :
 sum(argument (input) ) 

*/

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 4));

console.log(love("hossein"));

function love(name) {
  return `i love ${name}`;
}

// !!! its better always use arrow function unless can't use it

/* practic */

// Create a function that say hello

function hello(name) {
  return `Hello ${name}`;
}

console.log(hello("Hossein"));
