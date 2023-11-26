const express = require("express");
const app = express();

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movies = [
  {
    id: 1,
    name: "Sasori",
    technq: "marionnettisme",
    village: "Suna",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/f/f7/Sasori.png/revision/latest/scale-to-width-down/350?cb=20161005210021&path-prefix=fr",
  },
  {
    id: 2,
    name: "Deidara",
    technq: "Bakuton",
    village: "Iwa",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/0/06/Deidara.png/revision/latest/scale-to-width-down/350?cb=20131007234317&path-prefix=fr",
  },
  {
    id: 3,
    name: "Itachi Uchiwa",
    technq: "Mangekyô Sharingan, Genjutsu ",
    village: "Konoha",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/e/ef/Itachi_Uchiwa_2.png/revision/latest/scale-to-width-down/350?cb=20161101162942&path-prefix=fr",
  },
  {
    id: 4,
    name: "Kisame Hoshigaki",
    technq: "Kenjutsu",
    village: "Kiri",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/c/c9/Kisame_Hoshigaki.png/revision/latest/scale-to-width-down/350?cb=20201231011429&path-prefix=fr",
  },
  {
    id: 5,
    name: " Zetsu",
    technq: "fusion",
    village: "inconnu",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/2/2b/Zetsu_Blanc2.png/revision/latest?cb=20141109011929&path-prefix=fr",
  },
  {
    id: 6,
    name: "Kakuzu",
    technq: "Corps rapiécé, Ninjutsu",
    village: "Taki",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/5/57/Kakuzu.png/revision/latest?cb=20160418210749&path-prefix=fr",
  },
  {
    id: 7,
    name: "Hidan",
    technq: "immortalité",
    village: "Yu",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/6/6e/Hidan2.png/revision/latest/scale-to-width-down/350?cb=20151018130413&path-prefix=fr",
  },
  {
    id: 8,
    name: "Konan",
    technq: "Ninjutsu de Papier,Ninjutsu ",
    village: "Ame",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/5/57/Konan.png/revision/latest/scale-to-width-down/350?cb=20210826082349&path-prefix=fr",
  },
  {
    id: 9,
    name: "Pain, Nagato",
    technq: "Outer Path, Rinnegan",
    village: "Ame",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/a/aa/Nagato_Squelettique.png/revision/latest?cb=20130505185531&path-prefix=fr",
  },
  {
    id: 10,
    name: "Tobi",
    technq: " Ninjutsu spatio-temporel ",
    village: "Konoha",
    picture:
      "https://static.wikia.nocookie.net/naruto/images/7/72/Tobi.png/revision/latest?cb=20160904163300&path-prefix=fr",
  },
];
const getMovies = (req, res) => {
  res.json(movies);
};

app.get("/api/movies", getMovies);

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
};

app.get("/api/movies/:id", getMovieById);

module.exports = app;
