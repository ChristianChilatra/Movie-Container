import API from "./api.js";

export async function buildData(page, filter, query) {
  const URL = new API("7b6af2d10187dac2f4a78feca90ed1b7");

  const response = await fetch(URL.discoverMovie(page, filter, query));

  const data = await response.json();

  return data;
}

export async function movieBanner() {
  const URL = "https://image.tmdb.org/t/p/original";

  const data = await buildData();
  const numberMovie = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * (20 - 1) + 1)
  );
  const selectPathMovie = Array.from(
    numberMovie,
    (x) => data.results[x]["backdrop_path"]
  );

  const imgPathMovie = Array.from(selectPathMovie, (x) => URL + x);

  return imgPathMovie;
}

export async function listMovie(page, filter,query) {


  const URL = "https://image.tmdb.org/t/p/original";

  const data = await buildData(page, filter, query);

  const movies = [];

  for (const key in data["results"]) {
    const movie = {
      title: data["results"][key]["title"],
      overview: data["results"][key]["overview"],
      release_date: data["results"][key]["release_date"],
      posterPath: data["results"][key]["poster_path"],
      average: data["results"][key]["vote_average"],
      id: data["results"][key]["id"],
    };

    movies.push(movie);
  }

  const posterMovies = Array.from(movies, (x) => URL + x["posterPath"]);

  return { movies, posterMovies };
}
