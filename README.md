# rapid-full-stack-repo
> One day full stack application, styling optional.

## Table of Contents
### Checkpoints
- [CHECKPOINT 1](#checkpoint-1)
- [CHECKPOINT 2](#checkpoint-2)
- [CHECKPOINT 3](#checkpoint-3)
- [CHECKPOINT 4](#checkpoint-4)

### Components
- [DATABASE](#database)
- [API](#api)
- [FRONT-END](#front-end-using-vite)
- [STRETCH GOALS](#stretch-goals)

## What is the purpose of this repository?
The purpose of this exercise is to get repetitions creating each of the components of your full stack application. Those components being, the `Database`, the `API`, and the `Front-End`. Once you have created each component you then want to make them communicate between each other. Your `Database` holds data that your `API` accesses, using a technology such as KNEX, and hosts in a **REST**ful manner. And your `Front-End` reaches out and fetches that **REST**ful data and displays it for your end-user to enjoy.

## Where to start?
> Start here, return here. This will be your home base to return to anytime you are so stuck you are not sure what is needed to fix something. Execute `SCORCHED EARTH` protocol and start her, from step ***0***!
<br>
<br>

### DATABASE

---

The quickest win you can get in this process is spinning up POSTGRES in docker. You should already have done this multiple times in class. The first step in getting your database up and running is that long command provided to you in the **Connecting to PostgreSQL** lesson. Once you run that command successfully, follow the next steps in that same lesson to connect to your POSTGRES container. **Hint: there are two commands you have to run and then you should see your command line displaying something like `postgres=#`.** The last thing you need to do to get your database running is to create the database you are going to be using. In this case you need to create a database called `movies`. Why movies? Because you are going to create a database that holds your top 3 favorite movies. You will be creating the migration and seed files once you get to the `API`. Remember the database, is only a part of your Back-End, your `API` being another component of it.
<br>
<br>

### API

---

#### Initialize
You should have your database set up and running. So now you will create the tables using migration files, and then seed the table you just created using a seed file. Each of which leverages KNEX. Return to your Learn content, only this time navigate over to the *Connecting to a Database Server with Knex* lesson. Follow the steps provided to initialize your `package.json`, followed by installing the following packages, [knex, express, pg, cors, nodemon]. There are other files you can install of course, but these create a perfect foundation for your `API`. Once that process has completed open your package.json file and add a start script. Your start script should utilize your index.js file, and can either leverage `node` or `nodemon`. Note:  `nodemon` watches for changes and restarts node as necessary, allowing you to not need to shutdown and spin up node repeatedly.

#### KNEX

You should still be in the same lesson as previously mentioned. Your next step is going to be initializing `KNEX` so that you can use its tool to create migration files and seed files. So run the provided KNEX initialization command, followed by the next steps needed to ensure KNEX connects to your POSTGRES database properly.

You will now need to head over to the *Database Migrations with Knex* lesson and follow the steps provided to create a migration file. **Reminder: your database is named movies.** Once you have created your migration file open it and take the necessary steps to create a table named `favorites` with the following columns: **[id, title, main_character, year_released]**. Do not forget to create your rollback function! Once you are confident in your migration file, run your migrate command (found in the same lesson).

Time to create your seed file. Move on to the next lesson in Learn *Seeding a Database with Knex*. Once you have arrived follow the instructions to create a seed file. Before seeding the DB, you will need to create that seed data, which should consist of your 3 favorite movies, ensuring you provide the data for each column that needs information. As soon as you are confident in your seed file, run the command to seed your `favorites` table located in your `movies` database. If you still have the terminal open that you used earlier to connect to POSTGRES and create your database head over to it. If not head back to the lesson that shows you how and connect again. Once you have reached POSTGRES, connect to your movies db `\c movies` and query the favorites table ensuring there is data there. You are going to set up express next so you can host that data for our Front-End to reach out and fetch.

## CHECKPOINT 1
> - Note: There will be multiple checkpoints throughout the instructions.
> - If you have made it here and are not real sure how you did it, this is a great spot to take a breath, and go `SCORCHED EARTH`. Tear it all down, [WHERE TO START](#where-to-start) and follow the above steps once more ensuring you are comfortable executing them.
> - If you are comfortable with these steps so far, then proceed to the next section, where you will setup your `ExpressJS API`.

---

<br>
<br>

### ExpressJS API
Congrats on making it this far. Your goal is to create your `API` that will initially house two endpoints (`/` and `/movies`) in your index.js file. `/` is your home endpoint, you want to let the end-user know they have reached your API, but there is no data for them here. `/movies` is the endpoint that provides the data retained in your `favorites` table, in **JSON** format. Head over to the Learn lesson *Using Knex with Express*. You will find in that lesson a solid starting point for your index.js file. Use it as a reference for creating your first 2 endpoints. One addition you can make right away is to add the use of cors, which you installed earlier. Import cors (using the same import syntax already in the example), and add the line `app.use(cors())` and you should now be good to go avoiding `cors` issues.

You should now be able to run your start command, spinning up your `API`. Once it is up and running, open a browser and visit each endpoint. `localhost:3000` should provide the message mentioned earlier, and `localhost:3000/movies` should provide a *JSONified* version of your data.

## CHECKPOINT 2
> - If you finished the previous section and are still struggling with some of it, roll back to [CHECKPOINT 1](#checkpoint-1). To do this, delete everything inside of your index.js and follow the **ExpressJS API** section, as many times as you need to.
> - If you want to solidify your knowledge so far, or just want to try it again, go for it. Go the `SCORCHED EARTH` route. Drop your database from inside Postgres, stop your docker container, shut down your API, and delete everything inside of your `rapid-full-stack-repo` directory, aside from this readme. But do not delete the directory itself, unless... you want to practice cloning it down again.
> - Next you will be creating the Front-End, so make sure your API and database are up and running.

---

<br>

### Front-End using VITE

---

You are in your final stretch. You have now successfully spun up a database, and hosted the data in a RESTful API. Now you need to create an application to display that data.

You may be wondering why you were instructed to set up the `Back-End` first. Well, this is because once the data is ready and hosted, you do not need to make any changes to your `Back-End` until you decide to add the rest of your `CRUD` functionality (create, update, delete). You can just focus on setting up a successful fetch to the `/movies` endpoint, followed by a basic display of that data.

### Create your VITE APP
#### NOTE: If you are not in the `rapid-full-stack-repo` directory, cd there now. Do not make the mistake of nesting your Front-End in your Back-End. Nesting your Front-End in your Back-End will cause issues.

If you do not remember the steps required to leverage node package manager in order to create a VITE app, navigate to the Learn lesson titled *React in Practice* and follow the steps provided. `Ignore the git related steps you are already in a git repo, that already contains a .gitignore.` Once you have finished following the steps VITE has provided you, open your App.jsx and delete everything, giving yourself a blank slate to create your single-page application.

## CHECKPOINT 3
> - If you are not comfortable with the initial steps of creating a VITE app, delete the directory that was created above (this should just be your Front-End vite directory), jump back to [CHECKPOINT 2](#checkpoint-2).
> - As always `SCORCHED EARTH` is always an option to give yourself the chance to solidify what you do and do not fully understand.
---
<br>
<br>

### Clean Slate
In your App.jsx, you are going to want to utilize **useState** (to hold the data you fetch from the `API` you created), **useEffect** (to fetch the aforementioned `API`). Make sure you import each of those, then create a **useEffect** that fetches the data only one time, and subsequently sets your state with that data. You do not need to alter the data coming in at all, you can just save the received data straight into your state.

The final step required for you to have successfully created a rapid full stack application is to add a return that displays all of the data you fetched and saved in your state. Remember it does not have to be pretty, you just want to make sure it is there.

## CHECKPOINT 4
> - Here is another great point to roll back to [CHECKPOINT 3](#checkpoint-3) in order to get more repetitions in. Empty your APP.jsx file and walk through the *Clean Slate* section once more.

---

<br>

## Congrats

Congratulations you did it. You created a full stack application, you should be proud of your progress. Your next step is to tear it all down jump back to [WHERE TO START](#where-to-start), rinse and repeat. Each time trying to do it a little quicker and with a little less guidance each time. Do not worry about memorizing syntax, instead remembering where to find the needed syntax, or the next set of steps. Progressing little by little, until you are creating full stack applications in your sleep.

---

<br>
<br>

# Stretch Goals
ONLY VISIT HERE ONCE YOU ARE COMFORTABLE WITH THE ABOVE. NOT WHEN YOU HAVE IT MEMORIZED BUT WHEN YOU ARE COMFORTABLE ENOUGH TO SPEAK TO EACH STEP ABOVE. AGAIN NOT ONCE YOU HAVE MEMORIZED IT ALL, BECAUSE DON'T

1. Return to your Back-End and create the remaining CRUD operations. Suggested order (not required): POST → DELETE → UPDATE.  
   - Use Postman to execute these processes for now. You will use your Front-End to do it later. 
2. In your VITE app create a form that can be used to post a new row into your database. This same form can be used to Update a row later (but plan for that when you get there)
3. Create a way of deleting a row from your DB.
4. BURN IT DOWN AND DO IT ALL AGAIN INCLUDING THE STRETCH GOALS.
5. Create more tables, and seed them.
6. Create more end-points on your Back-End for the new tables.
7. Update your Front-End for the new API end points.
8. See step 4.
9. Style your app.
<br>
<br>
<br>
<br>

# THE END
### If you made it here great job. But this doesn't necessarily mean your journey is over. Go `SCORCHED EARTH` one more time and try it again all the way back at [WHERE TO START](#where-to-start). `REPETITION` is the key to success. Creating that connection from your brain to your fingers. Feel free to hold onto this repo for the rest of time and occasionally see if you can still execute the steps as fast as you used to, or even more likely faster than last time.