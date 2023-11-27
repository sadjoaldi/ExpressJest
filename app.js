const express = require("express");

const app = express();

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

const moviesList = (req, res) => {
  res.status(200).json(movies);
};

const moviesId = (req, res) => {
  const id = parseInt(req.params.id);
  const movFind = movies.find((movie) => movie.id === id);

  if (movFind) {
    res.status(200).json(movFind);
  } else {
    res.status(404).send(" Oups Not found");
  }
};

app.get("/api/movies", moviesList);

app.get("/api/movies/:id", moviesId);

module.exports = app;
