const express = require("express");

//# express app
const app = express();

//# register ejs view engine
app.set("view engine", "ejs");

//# route: / , show home page
// app.get("/", (req, res) => {
//   res.sendFile("./views/html/index.html", { root: __dirname });
// });
app.get("/", (req, res) => {
  res.render("index");
});

//# route: /about , show about page
// app.get("/about", (req, res) => {
//   res.sendFile("./views/html/about.html", { root: __dirname });
// });
app.get("/about", (req, res) => {
  res.render("about");
});

//# route: /about-us , redirect to /about
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//# route: all ther route , show not found page
// app.get("*", (req, res) => {
//   res.sendFile("./views/html/404.html", { root: __dirname });
// });
// app.get("*", (req, res) => {
//   res.render("404");
// });
app.use((req, res) => {
  res.status(404).render("404");
});

//# app port
const PORT = 5000;
//# listen for requests
app.listen(PORT, () => {
  console.log("server run in port: ", PORT);
});
