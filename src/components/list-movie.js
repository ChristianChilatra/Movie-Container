import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { listMovie, movieBanner } from "../services/data.js";
import Movie from "./movie.js";


const wrapperMoviesStyle = styledComponent.main`
  border: 1px solid red;
  inline-size: 100%;
`;
const titleStyle = styledComponent.h1`
  font: var(--headline1);
  margin: 0;
`;
const containerMovieStyle = styledComponent.div`
  border: 1px solid red;
  inline-size: 100%;
  block-size: auto;
  display:grid;
  grid-template-columns: repeat(auto-fill, 13.75rem);
  grid-template-rows: repeat(auto-fill, 20.625rem);
  gap: 1rem:
`;

const { movies, posterMovies } = await listMovie();

class ListMovie extends Component {
  render() {

    return wrapperMoviesStyle(
      {
        class: "wrapperMain",
        children: [
          titleStyle({ class: "Title Filter" }, "Dinamic"),
          containerMovieStyle(
            {
              class: "containerMovieStyle",
              children: [
                new Movie({ title: movies[0]["title"], poster: posterMovies[0] }),
                new Movie({ title: movies[0]["title"], poster: posterMovies[1] }),
                new Movie({ title: movies[0]["title"], poster: posterMovies[2] }),
                new Movie({ title: movies[0]["title"], poster: posterMovies[3] }),
                new Movie({ title: movies[0]["title"], poster: posterMovies[4] }),
                new Movie({ title: movies[0]["title"], poster: posterMovies[5] }),
              ],
            },
            ""
          ),
        ],
      },
      ""
    );
  }
}

export default ListMovie;
