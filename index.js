const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/html/about.html", { root: __dirname });
});

app.get("/*", (req, res) => {
  res.sendFile("./views/html/404.html", { root: __dirname });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server run in port: ", PORT);
});
