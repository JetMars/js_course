'use strict';

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (isNaN(numberOfFilms) || numberOfFilms === 0) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }

  personalMovieDB.count = numberOfFilms;
}

function remberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movieA = prompt('Один из просмотренных фильмов?', '');
    const ratingB = prompt('На сколько оцените его?', '');

    if ((+movieA !== 0) && (+ratingB !== 0) && movieA.length < 50) {
      personalMovieDB.movies[movieA] = ratingB;
    } else {
      i--;
    }
  }
}

function dectedPersonalLevel(number) {

  if (number < 10) {
    console.log('Просморенно довольно мало фильмов');
  } else if (number <= 30) {
    console.log('Вы классический зритель');
  } else if (number > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }

}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    count++;
    const genre = prompt(`Ваш любимый жанр под номером ${count}`);
    if ((+genre !== 0) && isNaN(+genre)) {
      personalMovieDB.genres.push(genre);
    } else {
      count--;
      i--;
    }
  }
}

start();
remberMyFilms();
dectedPersonalLevel(personalMovieDB.count);
showMyDB(personalMovieDB.privat);
writeYourGenres();