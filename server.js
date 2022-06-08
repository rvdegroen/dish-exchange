// REQUIRE VARIABLES
require("dotenv").config();
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const bodyParser = require("body-parser");

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

// GLOBAL VARIABLES DATABASE - AFTER CLIENT IS CONNECTED
// Variable of the database dish-exchange
let database;
// Variable of dishes collection within dish-exchange
let dishesCollection;

// CONNECT DATABASE
async function run() {
  try {
    // Connect the client to url that's saved in .env file
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    // Variable of the database dish-exchange
    database = client.db("dish-exchange");
    // Variable of dishes collection within dish-exchange
    dishesCollection = database.collection("dishes");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// MIDDLEWARE
// express knows all my static files are in my static folder
app.use(express.static("static"));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES

// homepage
app.get("/", async (req, res) => {
  // I want to retrieve data from mongoDB with .find, which returns a cursor
  const cursor = dishesCollection.find();
  // I have a cursor but I want my collection with all the dishes documents
  const allDishes = await cursor.toArray();
  // console.log(allDishes);

  res.render("pages/dishes", {
    // variables in the front-end
    numberOfDishes: allDishes.length,
    allDishes,
  });
});

// add-dish page
app.get("/add-dish", (req, res) => {
  res.render("pages/add-dish");
});

// add-dish post into mongoDB
app.post("/add-dish", async (req, res) => {
  const newDish = await dishesCollection.insertOne({
    name: req.body.dishName,
    quality: req.body.dishQuality,
    ingredients: req.body.ingredients.split(","),
    tags: req.body.tags,
    img: "test.jpeg",
  });
  // console log will return the insertedId
  // console.log("newDish", newDish);
  const insertedId = newDish.insertedId;
  // using ``, because then I can use the ${} to insert variables (template literals)
  res.redirect(`/dish/${insertedId}`);
});

// dish-details page
// dishId has the same Id as insertedId from line 79, because that's where you go redirected
app.get("/dish/:dishId", async (req, res) => {
  const urlId = req.params.dishId;
  console.log("urlId", urlId);
  // a query will basically filter the information you're looking for
  // we need to convert the urlId from "string" to (a new variable) objectId
  // source: https://stackoverflow.com/questions/8233014/how-do-i-search-for-an-object-by-its-objectid-in-the-mongo-console
  const query = { _id: new ObjectId(urlId) };
  const dish = await dishesCollection.findOne(query);
  // making sure that when you click on a dish, it will console.log the dish
  console.log("dish", dish);

  res.render("pages/dish-details", {
    // variables in the front-end
    dish,
  });
});

// 404 error pages
app.get("*", (req, res) => {
  res.send("This page does not exist!");
});

// APP LISTENING
app.listen(process.env.PORT || 3000);
