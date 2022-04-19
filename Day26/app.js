const express = require("express");
const firstApp = express();
const PORT1 = 3000;

/* first app */

firstApp.get("/chocolate", (req, res) => {
  const { amount } = req.query;
  res.send(`you wanna ${amount} chocolate`);
});

firstApp.get("*", (req, res) => {
  res.send("Page not found !");
});

firstApp.listen(PORT1, () => {
  console.log(`first App is running on port : ${PORT1}`);
});

/* seconde app */

const secondeApp = express();
const PORT2 = 5050;

secondeApp.get("/multiply", (req, res) => {
  // get querys
  const { value1, value2 } = req.query;

  /* validation */
  Number(value1) && Number(value2)
    ? res.send(`result is : ${value1 * value2}`)
    : res.send(`Please enter two valide number`);
});

secondeApp.get("*", (req, res) => {
  res.send("Page not found !");
});

secondeApp.listen(PORT2, () => {
  console.log(`seconde App is running on port : ${PORT2}`);
});
