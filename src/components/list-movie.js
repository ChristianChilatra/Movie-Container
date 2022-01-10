import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import { listMovie } from "../services/data.js";
import Movie from "./movie.js";

class ListMovie extends Component {

  async render() {

    const {page, filter} = this.props
    const { movies, posterMovies } = await listMovie(page, filter);

    const pageMovie = Array.from(movies, (x, index) =>
      createElement("movie", {
        children: [
          new Movie({
            title: x["title"],
            average: x["average"],
            poster: posterMovies[index],
          }),
        ],
      },"")
    );
    return pageMovie;
  }
}

export default ListMovie;
