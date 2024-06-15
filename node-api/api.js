const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

app.get("/", (req, res) => {
   counter++;
   console.log(`Request number ${counter}`);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
