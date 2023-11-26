const express = require("express");

const app = express();

const port = 3310;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    colors: true,
    duration: 180,
  },
];

app.get("", (req, res) => {
  res.send("Welcome to my favoryte movie list");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listining on ${port}`);
  }
});

const moviesList = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", moviesList);

const moviesId = (req, res) => {
  const id = parseInt(req.params.id);
  const movFind = movies.find((movie) => movie.id === id);

  if (movFind) {
    res.status(200).json(movFind);
  } else {
    res.status(404).send(" Oups Not found");
  }
};

app.get("/api/movies/:id", moviesId);
