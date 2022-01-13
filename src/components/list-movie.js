import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { listMovie } from "../services/data.js";
import Movie from "./movie.js";

const containerMovieStyle = styledComponent.div`
  block-size: auto;
  inline-size: auto;
`

class ListMovie extends Component {

  async render() {

    const {page, filter, query} = this.props
    const { movies, posterMovies } = await listMovie(page, filter, query);

    const pageMovie = Array.from(movies, (x, index) =>
      containerMovieStyle(
        {
          class: "containerMovie",
          children: [
            new Movie({
              title: x["title"],
              average: x["average"],
              overview: x["overview"],
              release_date: x["release_date"],
              poster: posterMovies[index],
            }),
          ],
        },
        ""
      )
    );
    return pageMovie;
  }
}

export default ListMovie;
