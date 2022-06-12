# Process

This is a guide for myself to document my process, so I won't forget and won't get confused

## Start & Configure Linter & Prettier

1. `npm init`
2. `git init`
3. install extension for vscode: `prettier` & `eslint`
4. install eslint with: `npm install eslint --save-dev`
5. configure eslint with: `npm init @eslint/config`
6. google how to configure prettier with eslint airbnb: `https://gist.github.com/bradtraversy/aab26d1e8983d9f8d79be1a9ca894ab4`
7. install neccesities for eslint and prettier: `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier`

## Files Created

8. create a `.prettierrc` file for prettier rules
9. create a `.gitignore` with template from: `https://github.com/github/gitignore/blob/main/Node.gitignore`
10. create a `.env` file for future passwords and keys

## Config Prettier

11. turn on `format on save` in vscode
12. choose `prettier` as default formatter in vscode
13. in `.eslintrc.json` added in `extends`: `"prettier"`
14. in `.eslintrc.json` added `plugins`: `"prettier"`
15. in `.eslintrc.json` added in `rules`: `"prettier/prettier": "error"` & `"no-console": "off"`

16. install express with: `npm install express --save`
17. add a `server.js` file and add the code in it from `https://www.npmjs.com/package/express` to use express
18. install nodemon with: `npm install --save-dev nodemon`
19. in `package.json` add in `scripts`: `"dev": "npm run nodemon"`

20. make a `static` folder and inside a `css` and `images` folder
21. make a `views` folder and inside `partials` and `pages` folder

22. install ejs with: `npm install ejs --save`
23. google how to configure ejs: `https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application`
24. configure ejs in `server.js` with: `app.set('view engine', 'ejs');`
25. set middleware for express in `server.js` with: `app.use(express.static("static"));`

26. install `dotenv` with: `npm install dotenv --save`
27. require `dotenv` in `server.js` with: `require('dotenv').config()`

28. installed `ejs language support` extension for my vscode, otherwise the colors won't be blue and it confuses me

29. added `partials` and `pages`

30. in `mongodb` I made a new project called `dish-exchange` and created a shared (free) database
31. i created a user with a password so I can read and write into my database
32. I first my own IP then in `network access` I deleted my ip and clicked on `add IP adress` followed by `allow access from anywhere`
33. I went to `database` > `browse collections` then I `created a database` with the name `dish-exchange`
34. I made a collection called `dishes`
35. I clcicked on `insert document` and made 2 example dishes or `documents` in my dishes database
36. started to read the mongodb documentation with node driver on atlas: `https://www.mongodb.com/docs/drivers/node/current/`

## MongoDB

37. installed mongodb with: `npm install mongodb --save`
38. put in `server.js`: `const MongoClient = require("mongodb");`
39. googled on how to use a `dotenv` for my link with a password for my mongodb_URI: `https://northflank.com/guides/connecting-to-a-mongo-db-database-using-node-js`
40. in my mongodb `database` I clicked on `connect` > `connect with application`
41. in my `server.js` I added `const uri = process.env.mongo_uri;` instead of my password
42. I copied the link and put in my `password` of my user, I changed `cluster0` to `cluster1` (like in mongodb) and put this as a variable in my `dotenv` file
43. I also made a `.envSample` file for later

## Deployment

44. I googled "Deploying with Git" and found: `https://devcenter.heroku.com/articles/git`
45. One of the steps is to install Heroku CLI (linux ubuntu): `https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli`
46. I install Heroku CLI with: `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`
47. installed heroku with: `npm install heroku --save` or `npm install -g heroku --save` followed by `npm audit fix`
48. create heroku remote for a new app with `heroku create -a dishexchange`
49. terminal asked to press any button and to click on the link to `login` into heroku in my browser and I checked my remotes with `git remote -v`
50. commit and push code with: `git push heroku main`
51. went to the heroku website & to my app into: `settings` and then `reveal config vars`. I put in there my mongodb variable with password that's in my `.env file`.
52. because I got the `error H10` wouldn't work, I stumbled upong making a `procfile` with the code: `web: node server.js`, so heroku would know what to start
53. I googled to know more about procfile: `https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl`
54. heroku got an `error H20`, so I googled and found: `https://stackoverflow.com/questions/18679690/heroku-nodejs-app-with-r10-h10-and-h20-errors`
55. instead of having: `app.listen(3000);` I changed it for heroku to: `app.listen(process.env.PORT || 3000)`

56. I started working on my `pages` HTML/EJS a bit, just to have the basics in there (without the web API of some sort)

57. I installed the vscode extension `gitlens` as it shows extra information (e.g. commits, branches, remotes) about my project when I go into the `source control` tab.

##

## to add later:

58. installed `body-parser` with `npm install body-parser --save`
59. added `const= bodyParser = require('body-parser')` in `server.js`

## adding stuff

59. googled "how to link variables from `server.js` to `ejs`" and found: `https://www.geeksforgeeks.org/how-to-make-js-variables-accessible-to-ejs-files/`
60. hard code variables I have in my `.ejs` into `server.js` so I can open it from localhost:3000

61. working on connecting database googled `https://www.mongodb.com/docs/drivers/node/current/usage-examples/count/`
62. with `collections.find` it will return a `cursor`, because if it would return all the data at once, the pc's memory might be full and the application wouldn't work good, so instead it returns a `cursor`. source: https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/
63. You can retrieve data from a cursor with `toArray()` if you do want everything at once and it can handle it, or with `forEach()` to look through them one by one.
64. .length is an array property
65. In `server.js` I got the cursor of `dishesCollection` and got every dish with `toArray()`

66. put data in server.js in route `/`
67. added `numberOfDishes` and `allDishes`
68. In `dish.ejs` we want data from `allDishes` with `forloop`

## working on the add-dish route

69. googled "how to insert a document into a collection of MongoDB with node.js driver" and found: `https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp`
70. created a test document that i could post into my mongodb
71. it wasn't clear for me on how to use bodyparser with `https://www.npmjs.com/package/body-parser` so i googled and found: `http://expressjs.com/en/resources/middleware/body-parser.html` and also `https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm`
72. ended up googling how to insert document into mongodb and found: `https://www.youtube.com/watch?v=4EXR5rhcEtw` which I've watched until 5.30
73. made the `add-dish` res.redirect to the `insertedId`

##

74. in `.eslintrc.json` I turned off `"prefer-destructuring": "off"`, becauce I just don't want to bother understanding it now and otherwise it will make my code look confusing.
75. working on webAPI, thirdpartyAPI, progressive enhancement with media device API and spoonaculair
76. example code: https://usefulangle.com/post/352/javascript-capture-image-from-camera

## NOTES

77. ADDED BTN IN ADD-DISH - ID AUTODETECTEDFOODBUTTON WITH CLASS HIDDEN
78. ADDED SCRIPT IN ADD-DISH
79. ADDED HIDDEN IN CSS FILE
80. need to - ADD SCRIPT PATH
81. ADDED VIDEO AND CANVAS
82. epreventdefault so it wont post

83. post request to spoonaculair url with fetch
84. json string is what you need to send so you want to send a (name) file , in spoonaculair it wwants a binaryimgfile
85. how to get binaryimgfile:

## things I changed or added

86. try & catch error in `server.js` and `add-dish` page
87. edited class `.error` to `color red` in `css`
88.

# Code

## General

`try` = defines the code block to run (to try)

`catch` defines a code block to handle any error

`finally` or `catch` = defines a code block to run regardless of the result

`throw` defines a custom error

source = https://www.w3schools.com/jsref/jsref_try_catch.asp

## Heroku

`heroku --version` = check heroku version

`heroku login` = login with heroku on the browser

`heroku create -a example-app` = to make a new heroku remote and an empty heroku git repo

`git remote -v` = check remotes

`heroku git:remote -a example-app` = to make a heroku remote for the existing example-app

`git remote rename heroku heroku-staging` = rename a remote (this case heroku to heroku-staging)

`git push heroku main` = to deploy code after commiting

source: https://devcenter.heroku.com/articles/git

## EJS

`<% %>` = to run code

`<%= %>` = replace code with text

`<%- %>` = to include parials

source: https://ejs.co/#docs

# Variables

## In server.js

1. `let database` = variable of the database dish-exchange
2. `let dishesCollection` = variable of dishes collection within dish-exchange
3. `cursor` = `dishesCollection.find()` in route `/`
4. `allDishes` = showing all documents in `dishesCollection` with: `await cursor.toArray()` in route `/`
5. `numberOfDishes` = `allDishes.length` as a number shown on `dishes.ejs` in route `/`
6. `dishId` = id of the dish for a route in `/dish/dishId` in `dish.ejs` and `server.js`

7. `newDish` = object with data from the form in `add-dish.ejs`, which will get posted and turned into a document in `mongodb`

8. `urlId` = id used in the route for `dish-details` page

## in dishes.ejs

1. `numberOfDishes` = number of total documents in mongodb

## in add-dish.ejs

## in dish-details.ejs

1. `dishIngredients` = value: ingredient, array of ingredients
2. `dishName` = value: name of the dish in `dish.ejs` & `dish-details.ejs`
3. `dishImage` = value: image in /images in `dish.ejs`
4. `dishTags` = value: tags, which is an array in `dish.ejs`
5. `dishQuality` = value: quality, which is a number in `dish.ejs`

## in partials

1. `dishName` = value: name of the dish in `dish.ejs` & `dish-details.ejs`
2. `dishImage` = value: image in /images in `dish.ejs`
3. `dishTags` = value: tags, which is an array in `dish.ejs`
4. `dishQuality` = value: quality, which is a number in `dish.ejs`
5. `dishId` = id of the dish for a route in `/dish/dishId` in `dish.ejs` and `server.js`
6. `arrayNumber` = a loop that increases the number of arraynumber depending on the amount of documents saved in mongoDB dishes in `dish.ejs`
