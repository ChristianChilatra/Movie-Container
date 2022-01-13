import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";



const posterStyle = styledComponent.div`
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

  showModal = () =>{
    const { title, average, poster, overview, release_date } = this.props;

    const $modal = document.querySelector(".modal")
    const $containerPoster = document.querySelector(".container-poster");
    const $containerName = document.querySelector(".name-movie");
    const $containerDescription = document.querySelector(".description-movie");
    const $containerDate = document.querySelector(".date-movie");

    $containerPoster.style.backgroundImage = `url(${poster})`;
    $containerName.textContent = `${title}`;
    $containerDescription.textContent = `${overview}`;
    $containerDate.textContent = `${release_date}`;
    $modal.showModal();

  }

  render() {
    const { title, average, poster } = this.props;

    return posterStyle(
      {
        class: "movie",
        onClick: this.showModal,
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
    );
  }
}


export default Movie