// REQUIRE VARIABLES
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
// const bodyParser = require("body-parser");

// VARIABLES
const app = express();
// connection uri to database
const url = process.env.DATABASE_URL;

// CONFIGURATION
// sets configuration
app.set("view engine", "ejs");
app.set("views", "./views");
// new client mongodb
const client = new MongoClient(url);

// DATABASE VARIABLES AFTER CLIENT IS CONNECTED
// Variable of the database dish-exchange (with const, immediately use it)
let database;
// Variable of dishes collection within dish-exchange
let dishesCollection;

// CONNECT DATABASE
async function run() {
  // Connect the client to url that's saved in .env
  await client.connect();
  // Variable of the database dish-exchange
  database = client.db("dish-exchange");
  // Variable of dishes collection within dish-exchange
  dishesCollection = database.collection("dishes");
}
run();

// MIDDLEWARE
// express knows all my static files are in my static folder
app.use(express.static("static"));

// ROUTES
// homepage
app.get("/", async (req, res) => {
  // I want to retrieve data with .find and it returns a cursor
  const cursor = dishesCollection.find();
  // i have a cursor but I want my dishes
  const allDishes = await cursor.toArray();
  console.log(allDishes);

  res.render("pages/dishes", {
    numberOfDishes: allDishes.length,
    allDishes,
  });
});

app.get("/add-dish", (req, res) => {
  res.render("pages/add-dish");
});

// 404 error pages
app.get("*", (req, res) => {
  res.send("This page does not exist!");
});

// APP LISTENING
app.listen(process.env.PORT || 3000);
