// 1. What's Hiding Amongst the Crowd?
/* A word is on the loose and now has tried to hide amongst a crowd of tall letters!
 Help write a function to detect what the word is, knowing the following rules:
 The wanted word is in lowercase.
 The crowd of letters is all in uppercase.
 Note that the word will be spread out amongst the random letters, but their letters remain in the same order. */

function detectWord(str) {
  let newString = "";
  [...str]
    .filter((elem) => (elem == elem.toLowerCase() ? (newString += elem) : ""))
    .toString();
  return newString;
}

// 2 Promises III: Native Promise, Introducing the Executor

/* 
Promises are just objects that contain the outcome of asynchronous operations.
 So when do you use one? When you want to control the outcome of an asynchronous operation.
 All you have to do is wrap the asynchronous function with a promise constructor.
 The promise constructor requires you to pass a function called the executor which takes two parameters,
 resolve and reject.
 Both are functions that you use to pass or reject a value that is usually the result of the async operation.  */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("edabit");
  }, 1000);
});

//test

// 1

detectWord("UcUNFYGaFYFYGtNUH");
detectWord("bEEFGBuFBRrHgUHlNFYaYr");
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
detectWord(
  "cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn"
);

// 2

let prom = promise.then((err, res) => {
  if (err) {
    return err;
  }
  return res;
});

prom.then((res) => {
  assertEquals(typeof res, "string", "The promise needs resolve a string.");
});

assertEquals(promise, promise);
