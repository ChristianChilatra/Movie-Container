import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";



const posterStyle = styledComponent.div`
  inline-size: auto;
  block-size: 20.625rem;
  background-size: cover;
  position:relative;
  border-radius: 1rem;
  cursor: pointer;
`;
const averageStyle = styledComponent.div`
  border-inline-end: 0;
  inline-size: 7.125rem;
  block-size: 4rem;
  position: absolute;
  inset-block-start: 10%;
  font: var(--headline3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const valueAvageStyle = styledComponent.p`
  margin: 0;
`;


function background(url) {
  return `background: url('${url}');`;
}
class Movie extends Component {
  render() {
    const {title, average, poster} = this.props

    return createChildren(
      "div",
      {
        class: "container-movie",
        children: [
          posterStyle(
            {
              children: averageStyle(
                {
                  children: [
                    createElement("i", { class: "icon-icon-fav" }, ""),
                    valueAvageStyle({ class: "valueverage" }, average),
                  ],
                },
                "",
                background("../../icon/average.svg")
              ),
            },
            "",
            background(poster)
          ),
        ],
      },
      ""
    );

  }
}


export default Movie