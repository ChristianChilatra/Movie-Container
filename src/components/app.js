import { Component } from "../lib/react.js";
import { createElement, createChildren } from "../lib/react-element.js";
import styledComponent from "../lib/styled-components.js";
import { trailerMovie } from "../services/data.js";
import Header from "./header.js";
import Banner from "./banner.js";
import ListMovie from "./list-movie.js";

const AppStyle = styledComponent.div`
  background: transparent;
  inline-size: auto;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const titleStyle = styledComponent.h1`
  font: var(--headline1);
  margin: 0;
`;

const containerMovieStyle = styledComponent.div`
  inline-size: 100%;
  block-size: auto;
  display:grid;
  grid-gap: .5rem;
  justify-content: center;
`;
const modalStyle = styledComponent.dialog`
  inline-size: auto;
  block-size: 100vh;
  background: #0F0E17;
  opacity: 0.93;
  display: flex;
  justify-content: center;
`;

const containerDataMovieStyle = styledComponent.div`

`;

const iconButtonStyle = styledComponent.button`
  block-size: 2rem;
  inline-size: 2rem;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
`;

const iconStyle = styledComponent.i`
  font-size: 2rem;
  position: absolute;
  inset-block-start: 1rem;
  inset-inline-end: 1rem;
`;
const containerPosterStyle = styledComponent.div`
  background-size: cover;
  border-radius: 1rem;
  cursor: pointer;

  transform: matrix(1.14,-0.22,0.67,0.74,0,0);
  grid-area: poster;
  place-self: center;
`;
const nameMovieStyle = styledComponent.h2`
  grid-area: title;
  color: var(--white);
  margin: 0;
`;
const descriptionMovieStyle = styledComponent.p`
  font: var(--body1-regular);

  color: var(--white);
  grid-area: desc;
`;
const dateMovieStyle = styledComponent.p`
  font: var(--body1-regular);

  color: var(--white);
  grid-area: date;
`;
const containerButtonModalStyle = styledComponent.p`
  font: var(--body1-regular);
  color: var(--white);
  grid-area: button;
`;

const buttonModalPlayStyle = styledComponent.button`
  grid-area: play;
  inline-size: auto;
  block-size: 3rem;
  border-radius: 0.25rem;
  background: var(--primary);
  padding: 0 2rem;
  border: 1px solid var(--primary);
  font: var(--button);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--black);
  box-sizing: content-box;
  cursor: pointer;
`;
const buttonModalAddStyle = styledComponent.button`
  grid-area: add;
  inline-size: auto;
  block-size: 3rem;
  border-radius: 0.25rem;
  padding: 0 2rem;
  background: var(--black);
  border: 1px solid var(--primary);
  font: var(--button);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--primary);
  box-sizing: content-box;
  cursor: pointer;
`;
class App extends Component {
  closeModal = () => {
    const $modal = document.querySelector(".modal");
    $modal.close();
  };

  eventTrailerMovie = async (event) => {
    const id = event.path.find(el => el.id != undefined && el.id != '').id
    const data = await trailerMovie({id : id});
    
    if(data.results.length != 0){
      window.location = `https://www.youtube.com/watch?v=${data.results[0].key}`;
    }else{
      window.alert('Pelicula no cuenta con Trailer')
    }
  };

  async render() {
    return createElement("body", {
      children: [
        new Header().render(),
        AppStyle(
          {
            class: "wrapper",
            children: [
              new Banner().render(),
              titleStyle({ class: "titleFilter" }, ""),
              containerMovieStyle(
                {
                  class: "containerMovieStyle",
                  children: [...(await new ListMovie({ page: 1 }).render())],
                },
                ""
              ),
              createElement("div", { class: "colaider" }, ""),
            ],
          },
          ""
        ),
        modalStyle(
          {
            class: "modal",
            children: [
              containerDataMovieStyle(
                {
                  class: "container-data-movie",
                  children: [
                    containerPosterStyle({ class: "container-poster" }, ""),
                    nameMovieStyle({ class: "name-movie" }, ""),
                    descriptionMovieStyle({ class: "description-movie" }, ""),
                    dateMovieStyle({ class: "date-movie" }, ""),
                    containerButtonModalStyle(
                      {
                        class: "container-button-modal",
                        children: [
                          buttonModalPlayStyle(
                            {
                              class: "button-modal play",
                              onClick: this.eventTrailerMovie,
                              children: [
                                createChildren("i", {
                                  class: "icon-icon-play",
                                }),
                                createChildren("p", {}, "VER AHORA"),
                              ],
                            },
                            ""
                          ),
                          buttonModalAddStyle(
                            {
                              class: "button-modal add",
                              children: [
                                createChildren("i", {
                                  class: "icon-icon-plus",
                                }),
                                createChildren("p", {}, "VER DESPUÉS"),
                              ],
                            },
                            ""
                          ),
                        ],
                      },
                      ""
                    ),
                  ],
                },
                ""
              ),
              iconButtonStyle(
                {
                  class: "close-modal-button",
                  onClick: this.closeModal,
                  children: [
                    iconStyle(
                      {
                        class: "icon-icon-close",
                        id: "close-modal",
                      },
                      ""
                    ),
                  ],
                },
                ""
              ),
            ],
          },
          ""
        ),
      ],
    });
  }
}

export default App;
