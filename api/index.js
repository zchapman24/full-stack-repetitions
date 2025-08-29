const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("You made it to the movies homepage");
});

app.get("/movies", (request, response) => {
  knex("movies")
    .select("*")
    .from("favorite_movies")
    .then((data) => response.status(200).json(data))
    .catch((error) => response.status(400).json(error));
});

// function handleSubmit() {
//   // API call to create new atendeez (don't say it)
//   // use navToAttend
//   const classesToAdd = { newClassName: newClassName };
//   fetch("http://localhost:8080/newClassName", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(classesToAdd),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to create class");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log("Class Added", data);
//       alert("Class added playboy");
//       navToAttend(newClassName);
//     });
// }
