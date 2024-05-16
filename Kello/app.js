const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Kello Kello!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
