import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { listMovie, movieBanner } from "../services/data.js";
import Movie from "./movie.js";

const wrapperMoviesStyle = styledComponent.main`
  inline-size: 100%;
`;
const containerMovieStyle = styledComponent.div`
  inline-size: 100%;
  block-size: auto;
  display:grid;
  grid-template-columns: repeat(auto-fill, 13.75rem);
  grid-template-rows: repeat(auto-fill, 20.625rem);
  grid-gap: 1rem;
  justify-content: center;
`;

class ListMovie extends Component {

  async render() {

    const {page} = this.props
    const { movies, posterMovies } = await listMovie(page);

    const pageMovie = Array.from(
      movies,
      (x, index) =>
        new Movie({
          title: x["title"],
          average: x["average"],
          poster: posterMovies[index],
        })
    );

    return wrapperMoviesStyle(
      {
        class: "wrapperMain",
        children: [
          containerMovieStyle(
            {
              class: "containerMovieStyle",
              children: pageMovie,
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
