import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import ListMovie from "./list-movie.js";
import { scrollInfinity } from "../utils/scroll-infinity.js";
import { createChildren } from "../lib/react-element.js";

const navStyle = styledComponent.nav`
  inline-size: auto;
  block-size: 30px;
  margin: 0;
  justify-content: space-between;
  align-items:center;
  display: flex;
`;

const ulStyle = styledComponent.ul`
  margin: 0;
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
  inline-size: 33rem;
  min-width: 9rem;
`;
const formMobileStyle = styledComponent.form`
  inline-size: 33rem;
  min-width: 9rem;
  display:flex;
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

const containerButtonMobileStyle = styledComponent.div`
  inset-inline-start: 50px;
  inset-block-start: 32px;
  display:flex;
  gap: 2rem;
`;

const buttonMobileStyle = styledComponent.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
`;

const iconMobileStyle = styledComponent.i`
  inset-inline-start: 20px;
  inset-block-start: 12px;
  font-size: 1.5em;
`;

class Filter extends Component {
  constructor(isShowMobile) {
    super(), (this.isShowMobile = isShowMobile);
  }

  eventAll = async () => {
    const page = 1;

    const $listMovie = document.querySelector(".containerMovieStyle");
    const $title = document.querySelector(".titleFilter");
    const listMovie = await new ListMovie({
      page,
    }).render();

    $title.textContent = "Populares";
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
    const $title = document.querySelector(".titleFilter");
    const listMovie = await new ListMovie({
      page,
      filter,
    }).render();

    $title.textContent = "Más Valoradas";
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
    const $title = document.querySelector(".titleFilter");
    const listMovie = await new ListMovie({
      page,
      filter,
    }).render();

    $title.textContent = "Menos Valoradas";
    $listMovie.innerHTML = "";

    listMovie.forEach(($el) => {
      $listMovie.appendChild($el);
    });

    scrollInfinity(filter);
  };

  eventShowSearch = () => {
    const $form = document.querySelector(".containerSearchMobile");
    const $widthSreen = window.screen.width;

    if ($widthSreen < 1200 && !this.isShowMobile) {
      $form.style.display = "flex";
      this.isShowMobile = true;
    } else {
      $form.style.display = "none";
      this.isShowMobile = false;
    }
  };

  renderNav() {
    return navStyle(
      {
        children: [
          containerButtonMobileStyle(
            {
              children: [
                buttonMobileStyle(
                  {
                    class: "icons-mobile",
                    children: iconMobileStyle({
                      class: "icon-icon-search mobile",
                      onClick: this.eventShowSearch,
                    }),
                  },
                  ""
                ),
                buttonMobileStyle(
                  {
                    class: "icons-mobile",
                    children: iconMobileStyle({
                      class: "icon-icon-hamburger mobile",
                    }),
                  },
                  ""
                ),
              ],
            },
            ""
          ),
          ulStyle(
            {
              class: "list-nav",
              children: [
                liStyle({
                  children: buttomStyle(
                    { class: "all filter", onClick: this.eventAll },
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

  eventSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("search");

    const page = 1;
    const filter = "search";

    const $listMovie = document.querySelector(".containerMovieStyle");
    const $title = document.querySelector(".titleFilter");

    if (query === "") {
      this.eventAll();
    } else {
      const listMovie = await new ListMovie({
        page,
        filter,
        query,
      }).render();

      $title.textContent = `"${query}"`;
      $listMovie.innerHTML = "";

      listMovie.forEach(($el) => {
        $listMovie.appendChild($el);
      });

      scrollInfinity(filter, query);
    }
  };

  renderSearch() {
    return formStyle({
      class: "search",
      onSubmit: this.eventSubmit,
      children: [
        inputSearchStyle(
          {
            type: "search",
            name: "search",
            id: "search",
            placeholder: "Busca tu Pelicula",
          },
          ""
        ),
        containerButtomStyle(
          {
            class: "containerButtom",
            children: [
              inputButtomStyle(
                { type: "submit", value: "", name: "submit" },
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
  renderSearchMobile() {
    return formMobileStyle({
      class: "searchMobile",
      onSubmit: this.eventSubmit,
      children: [
        inputSearchStyle(
          {
            type: "search",
            name: "search",
            id: "search",
            placeholder: "Busca tu Pelicula",
          },
          ""
        ),
        containerButtomStyle(
          {
            class: "containerButtom",
            children: [
              inputButtomStyle(
                { type: "submit", value: "", name: "submit" },
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
