import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import Filter from "./filter.js";
import styledComponent from "../lib/styled-components.js";
import { movieBanner } from "../services/data.js";

const bannerStyle = styledComponent.div`
  inline-size: auto;
  block-size: 21rem;
  margin: 0;
  display: flex;
  gap: 3rem;
  border: 1px solid red;
  background-size: cover;
`;

function background(url) {
  return `background: url('${url}');`;
}

const listMovie = await movieBanner()

class Banner extends Component {
  render() {
    return bannerStyle(
      { class: "banner" },
      "",
      background(listMovie[0])
    );
  }
}

export default Banner;
