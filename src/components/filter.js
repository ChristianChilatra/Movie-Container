import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import ListMovie from "./list-movie.js";
import { scrollInfinity } from "../utils/scroll-infinity.js";

const navStyle = styledComponent.nav`
  inline-size: auto;
  block-size: 30px;
  margin: 0;
  justify-content: space-between;
`;

const ulStyle = styledComponent.ul`
  margin: 0;
  display:flex;
  list-style: none;
  gap: 3rem;
  padding: 0;
`;
const liStyle = styledComponent.li`
  margin: 0;
  font: var(--body2-bold);
  display: flex;
  align-items: center;
`;
const buttomStyle = styledComponent.button`
  background: transparent;
  padding: 0;
  margin: 0;
  font: var(--button)
  text-decoration: none;
  user-select: none;
  color: var(--white);
  border: 0;
`;
const formStyle = styledComponent.form`
  display: flex;
  inline-size: 33rem;
  min-width: 9rem;
`;
const inputSearchStyle = styledComponent.input`
  border-radius: 8px 0px 0px 8px;
  border: 1px solid #FED941;
  inline-size: 100%;
  block-size: 2.75rem;
  outline: none;
  padding: 0 1rem 0 1rem;
`;
const containerButtomStyle = styledComponent.div`
  block-size: 2.75rem;
  inline-size: 4.5rem;
  margin: 0;
  position: relative;
  cursor: pointer;
  box-sizing: content-box;
`;
const inputButtomStyle = styledComponent.input`
  border-radius: 0px 8px 8px 0px;
  block-size: 2.75rem;
  inline-size: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #FED941;
  position: absolute;
  inset-inline-start: 0;
  background: #FED941;
  cursor: pointer;
`;
const iconSearchStyle = styledComponent.i`
  position: absolute;
  inset-inline-start: 20px;
  inset-block-start: 12px;
  font-size: 1.25rem;
`;

class Filter extends Component {

  eventAll = async () => {
    const page = 1;

    const $listMovie = document.querySelector(".containerMovieStyle");
    const listMovie = await new ListMovie({
      page: page,
    }).render();

    $listMovie.innerHTML = "";

    listMovie.forEach(($el) => {
      $listMovie.appendChild($el);
    });
    scrollInfinity();
  };

  eventMostValue = async () => {
    const page = 1;
    const filter = "desc";

    const $listMovie = document.querySelector(".containerMovieStyle");
    const listMovie = await new ListMovie({
      page: page,
      filter: filter,
    }).render();

    $listMovie.innerHTML = "";

    listMovie.forEach(($el) => {
      $listMovie.appendChild($el);
    });

    scrollInfinity(filter);
  };

  eventLeastValue = async () => {
    const page = 1;
    const filter = "asc";

    const $listMovie = document.querySelector(".containerMovieStyle");
    const listMovie = await new ListMovie({
      page: page,
      filter: filter,
    }).render();

    $listMovie.innerHTML = "";

    listMovie.forEach(($el) => {
      $listMovie.appendChild($el);
    });

    scrollInfinity(filter);
  };

  renderNav() {
    return navStyle(
      {
        children: [
          ulStyle(
            {
              children: [
                liStyle({
                  children: buttomStyle(
                    { class: "all filter",
                    onClick: this.eventAll },
                    "Todas"
                  ),
                }),
                liStyle({
                  children: buttomStyle(
                    {
                      class: "most-value filter",
                      onClick: this.eventMostValue,
                    },
                    "Más valoradas"
                  ),
                }),
                liStyle({
                  children: buttomStyle(
                    {
                      class: "least-value filter",
                      onClick: this.eventLeastValue,
                    },
                    "Menos valoradas"
                  ),
                }),
              ],
            },
            ""
          ),
        ],
      },
      ""
    );
  }


  eventSubmit = (event)=>{
    event.preventDefault();
  }

  renderSearch() {
    return formStyle({
      children: [
        inputSearchStyle(
          {
            type: "search",
            name: "search",
            id: "search",
            placeholder: "Busca tu Pelicula",
            for: "submit",
          },
          ""
        ),
        containerButtomStyle(
          {
            class: "containerButtom",
            children: [
              inputButtomStyle(
                { type: "submit", value: "", name: "submit", onSubmit: this.eventSubmit },
                ""
              ),
              iconSearchStyle({ class: "icon-icon-search" }, ""),
            ],
          },
          ""
        ),
      ],
    });
  }
}

export default Filter;
