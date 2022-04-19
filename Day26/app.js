const express = require("express");
const app = express();
const PORT = 3000;

app.get("/chocolate", (req, res) => {
  const { amount } = req.query;
  res.send(`you wanna ${amount} chocolate`);
});

app.get("*", (req, res) => {
  res.send("Page not found !");
});

app.listen(PORT, () => {
  console.log(`app is running on port : ${PORT}`);
});
