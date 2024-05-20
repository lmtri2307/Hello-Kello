const express = require("express");
const { hello } = require("./handler");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", hello);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
