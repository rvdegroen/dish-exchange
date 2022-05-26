// REQUIRE VARIABLES
require("dotenv").config();
const express = require("express");

// VARIABLES
const app = express();

// CONFIGURATION
app.set("view engine", "ejs");

// MIDDLEWARE
// express knows all my static files are in my static folder
app.use(express.static("static"));

// ROUTES
// homepage
app.get("/", (req, res) => {
  res.render("pages/dishes");
});

// 404 error pages
app.get("*", (req, res) => {
  res.send("This page does not exist!");
});

// APP LISTENING
app.listen(3000);
