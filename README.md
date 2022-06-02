# Welcome to my Tech repository!

This is a repository for my school course called "Blok Tech". This course is given in the sophomore-year of the study Communication & Mutlimedia Design at "Amsterdam University of Applied Sciences" also known as "De Hogeschool van Amsterdam".

The course is split in two parts, the first part of the course is the individual part and the second part of the course is where I'd have to work together in a team with other students. This repository is meant for the first part of the course.

# License

I'm using the GNU General Public License v3.0 so please keep this in mind if you'd like to use my code.

# Dish Exchange

For this course, I'm meant to make a feature of my own matching application. My matching application is called "Dish Exchange". Conceptually it's an app in which users can sign themselves up for and they can add their own dishes to their accounts, they would like to trade with others. You can then match with other people's dishes, contact them and talk about the dish exchange that will possibly take place. You are also able to set preferences.

## The feature I will make

For this course, I'm not meant to make the entire app, because we would need a lot more time for that than we currently have, so the assignment is to make one of the features in my concept.

The feature I will make is being able to add dishes to your menu, display them and being able to see the detail page of a dish. If I were to have more time left, I would also like to work on being able to edit the dish you created.

# How do you use my application?

To help you use my application, I set up a guide on how to use it.

## What will you need?

To be able to use my application you will need a few things:

- Any code editor
- Terminal for Linux
- Git
- Npm
- A mongoDB database (free)
- A spoonacular account
- Your own `.env` file within this repository (I recommend using my `.envSample` and renaming it to `.env`)

## Installation

If you have any trouble of questions with the installation, please don't hesitate and send me a message!

1. Open Linux in the terminal
2. In the terminal: locate yourself in the folder you want the local repository to be in
3. Copy the link of my repository - The link of my repository, can be found at the top of this page if you press on the `code` button and and then the copy button.
4. Use `git clone [LINK OF MY REPOSITORY]` in the terminal
5. Use `npm install` in the terminal to install the required node modules

Like I said before, you will need a mongoDB database and a Spoonacular account, which I'll explain below.

### MongoDB

First I'll explain how to create a new project and a cluster

6. Make a mongoDB account on "https://www.mongodb.com/" (it's free!)
7. Create a new project by clicking on the green button saying `new project` button in MongoDB (if you're not on the homepage, click on the leaf in the top left corner on the page to return to the homepage)
8. Create a cluster by clicking on the green button saying `build a database` (any settings are fine, a shared cluster is free)
9. MongoDB sends you to a `security quickstart`. In here you'll be making a user that can use your database. You will need the password of this user later for in your `.env` file! (see step 19)
10. If you scroll down on the `security quickstart` you will see that there's a button saying `add my current IP adress`. Click on it to add you IP to the IP Access list (otherwise you won't have access to your cluster)
11. Click on `finish and close` followed by `go to database`

In the following steps I'll explain how to create a collection in MongoDB

- ATTENTION: (PLEASE NOTE TO USE THE SAME NAMES AS I'M USING, OTHERWISE THE APPLICATION MIGHT NOT WORK AND YOU'LL HAVE TO FIX THIS YOURSELF IN SERVER.JS)

12. Now you should see `database deployments` of your cluster. To create a collection, click on `browse collections` followed by `add my own data`
13. Name the database `dishexchange` and call the collection `dishes` (PLEASE USE THE SAME NAMES OTHERWISE THE APPLICATION MIGHT NOT WORK!)

Now that you have your database set up, I'll explain in the following steps on how to connect your cluster with the application. For this you will need your own `.env` file (I recommend using `.envSample` and renaming it to `.env`)

14. Use my `.envSample` file in this repository and rename it to `.env` (I recommend using this file, because all you need to change is the value of the variables)
15. To connect your mongoDB cluster, go to your mongoDB cluster, click on `database` (on the left) and click on `connect`
16. Because we're using the Node.js driver to connect mongoDB, click on `connect your application`
17. Make sure that `driver` is set to `Node.js`
18. Copy the connection string (there's a copy button next to it) and add this connection string as a value of `DATABASE_URL` in your `.env` file of this repository
19. replace `<password>` with the password of the user you created earlier (remember step 9)

MongoDB should now be connected to this application!

### Spoonacular

To be able to use Spoonacular, you will need an API key. I'm only using spoonacular as a progressive enhancement, so that as a user you can make a picture of a dish and Spoonacular will try to "guess" the name of the dish and add this "guess" as name in the form, so you won't have to type the name of the dish yourself.

20. Create a Spoonacular account on: "https://spoonacular.com/food-api/docs/detect-foods-in-text" (it's free!)
21. Go to your Spoonacular profile (on the left, below API Console)
22. Click on `show / hide API key` to show your API key
23. Copy your API key
24. Paste your API key as the value of the variable `API_KEY` in your `.env` file

Now you should have everything you need and you're ready to go!
