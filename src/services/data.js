import API from "./api.js";

export async function buildData(page, filter, query, id) {
  const URL = new API("7b6af2d10187dac2f4a78feca90ed1b7");

  const response = await fetch(URL.discoverMovie(page, filter, query, id));

  const data = await response.json();

  return data;
}

export async function movieBanner() {
  const URL = "https://image.tmdb.org/t/p/original";

  const data = await buildData();
  const numberMovie = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * (20 - 1) + 1)
  );
  const selectPathMovie = Array.from(numberMovie, (x) => [
    data.results[x]["backdrop_path"],
    data.results[x]["id"],
  ]);

  const imgPathMovie = Array.from(selectPathMovie, (x) => URL + x[0]);
  const idMovie = Array.from(selectPathMovie, (x) => x[1]);

  return { imgPathMovie, idMovie };
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

export async function trailerMovie(id) {
  const data = await buildData(1, "video",'', id);
  console.log(data);
  return data
}