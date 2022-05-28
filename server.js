// REQUIRE VARIABLES
require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");

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

// test
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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
