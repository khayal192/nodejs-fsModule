const fs = require("fs");

fs.writeFile("./demo.txt", "Hello World", (err) => {
  if (err) {
    console.log(err.message);
  }

  console.log("Ok");
});
