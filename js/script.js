const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const movieA = prompt('Один из просмотренных фильмов?', '');
const ratingB = prompt('На сколько оцените его?', '');
const movieC = prompt('Один из просмотренных фильмов?', '');
const ratingD = prompt('На сколько оцените его?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


personalMovieDB.movies[movieA] = ratingB;
personalMovieDB.movies[movieC] = ratingD;

console.log(personalMovieDB);