const express = require("express");
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("hello world, wellcome mr.hossein");
});
app.get("/dog", (req, res) => {
  res.send("oh... its a dog !");
});

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
