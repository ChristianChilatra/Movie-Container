import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { movieBanner } from "../services/data.js";

const bannerStyle = styledComponent.div`
  inline-size: auto;
  block-size: 22rem;
  display: flex;
  border: 1px solid red;
`;

const containerMovieStyle = styledComponent.div`
  position: fixed;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 19rem;
  display: flex;
  gap: 1rem;
  border: 1px solid red;
  scroll-behavior: smooth;
  overflow-x: auto;
`;

const movieStyle = styledComponent.div`
  inline-size: 0;
  block-size: 19rem;
  background-size: cover;
  flex-shrink: 0;
`;

function background(url) {
  return `background: url('${url}');`;
}

const listMovie = await movieBanner();

class Banner extends Component {
  render() {
    return bannerStyle(
      {
        class: "banner",
        children: [
          containerMovieStyle({
            class: "containerMovie",
            children: [
              movieStyle({ class: "movie-banner" },'',background(listMovie[0])),
              movieStyle({ class: "movie-banner" },'',background(listMovie[1])),
              movieStyle({ class: "movie-banner" },'',background(listMovie[2])),
            ],
          }),
          createChildren("div", {
            class: "selectedMovie",
            children: [
              createChildren("a", {}, ""),
              createChildren("a", {}, ""),
              createChildren("a", {}, ""),
            ],
          }),
        ],
      },
      ""
    );
  }
}

export default Banner;
