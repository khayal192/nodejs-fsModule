const express = require("express");
const fs = require("fs");
const app = express();
const port = 8000;

app.get("./profile", (req, res) => {
  res.end("Your Profil");
});

app.get("./public/html/demo.html", (err, data) => {
  fs.readFile("./public/html/demo.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  })
  res.end(data);
});
app.listen(port, () => {
  console.log(`Server in ranning`);
});
