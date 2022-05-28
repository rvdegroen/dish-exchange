# Process

This is a guide for myself to document my process, so I won't forget and won't get confused

1. `npm init`
2. `git init`
3. install extension for vscode: `prettier` & `eslint`
4. install eslint with: `npm install eslint --save-dev`
5. configure eslint with: `npm init @eslint/config`
6. google how to configure prettier with eslint airbnb: `https://gist.github.com/bradtraversy/aab26d1e8983d9f8d79be1a9ca894ab4`
7. install neccesities for eslint and prettier: `npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier`

8. create a `.prettierrc` file for prettier rules
9. create a `.gitignore` with template from: `https://github.com/github/gitignore/blob/main/Node.gitignore`
10. create a `.env` file for future passwords and keys

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

37. installed mongodb with: `npm install mongodb --save`
38. put in `server.js`: `const MongoClient = require("mongodb");`
39. googled on how to use a `dotenv` for my link with a password for my mongodb_URI: `https://northflank.com/guides/connecting-to-a-mongo-db-database-using-node-js`
40. in my mongodb `database` I clicked on `connect` > `connect with application`
41. in my `server.js` I added `const uri = process.env.mongo_uri;` instead of my password
42. I copied the link and put in my `password` of my user, I changed `cluster0` to `cluster1` (like in mongodb) and put this as a variable in my `dotenv` file
43. I also made a `.envSample` file for later