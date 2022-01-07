import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { movieBanner } from "../services/data.js";


const movieStyle = styledComponent.div`
  border: 1px solid red;
  inline-size: 13.75rem;
  block-size: 20.625rem;
  background-size: cover;
`;

function background(url) {
  return `background: url('${url}');`;
}
class Movie extends Component {
  render() {
    const {title, poster} = this.props
    return movieStyle({}, "", background(poster));

  }
}


export default Movie