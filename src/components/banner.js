import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";
import { movieBanner } from "../services/data.js";

const bannerStyle = styledComponent.section`
  inline-size: auto;
  display: flex;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
`;

const containerMovieStyle = styledComponent.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const movieStyle = styledComponent.div`
  block-size: auto;
  background-size: cover;
  flex-shrink: 0;
  border-radius: 8px;
  position: relative;
  display: grid;
  background-position-x: center;
`;

const buttonBannerPlayStyle = styledComponent.button`
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
const buttonBannerAddStyle = styledComponent.button`
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
const selectedBannerStyle = styledComponent.div`
  inline-size: 5rem;
  block-size: 2rem;
  position: relative;
  inset-block-end: -100%;
  display:flex;
  gap: 1rem;
  align-items: center;
`;

const refStyle = styledComponent.div`
  inline-size: 1rem;
  block-size: 1rem;
  margin: 0;
  border-radius: 50%;
`;
function background(url) {
  return `background: url('${url}');`;
}

const listMovie = await movieBanner();

class Banner extends Component {

  addEvent = () => {};

  render() {
    return bannerStyle(
      {
        class: "banner",
        children: [
          containerMovieStyle({
            class: "containerMovie",
            children: [
              movieStyle(
                {
                  class: "movie-banner",
                  id: "movie-banner-1",
                  children: [
                    buttonBannerPlayStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-play" }),
                          createChildren("p", {}, "VER AHORA"),
                        ],
                      },
                      ""
                    ),
                    buttonBannerAddStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-plus" }),
                          createChildren("p", {}, "VER DESPUÉS"),
                        ],
                      },
                      ""
                    ),
                  ],
                },
                "",
                background(listMovie[0])
              ),
              movieStyle(
                {
                  class: "movie-banner",
                  id: "movie-banner-2",
                  children: [
                    buttonBannerPlayStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-play" }),
                          createChildren("p", {}, "VER AHORA"),
                        ],
                      },
                      ""
                    ),
                    buttonBannerAddStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-plus" }),
                          createChildren("p", {}, "VER DESPUÉS"),
                        ],
                      },
                      ""
                    ),
                  ],
                },
                "",
                background(listMovie[1])
              ),
              movieStyle(
                {
                  class: "movie-banner",
                  id: "movie-banner-3",
                  children: [
                    buttonBannerPlayStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-play" }),
                          createChildren("p", {}, "VER AHORA"),
                        ],
                      },
                      ""
                    ),
                    buttonBannerAddStyle(
                      {
                        children: [
                          createChildren("i", { class: "icon-icon-plus" }),
                          createChildren("p", {}, "VER DESPUÉS"),
                        ],
                      },
                      ""
                    ),
                  ],
                },
                "",
                background(listMovie[2])
              ),
            ],
          }),
          selectedBannerStyle({
            class: "selectedBanner",
            children: [
              createChildren(
                "a",
                { href: "#movie-banner-1", children: refStyle({}, "") },
                ""
              ),
              createChildren(
                "a",
                { href: "#movie-banner-2", children: refStyle({}, "") },
                ""
              ),
              createChildren(
                "a",
                { href: "#movie-banner-3", children: refStyle({}, "") },
                ""
              ),
            ],
          }),
        ],
      },
      ""
    );
  }
}

export default Banner;
