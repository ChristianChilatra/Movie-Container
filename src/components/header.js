import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import Filter from "./filter.js";
import styledComponent from "../lib/styled-components.js";

const headerStyle = styledComponent.header`
  inline-size: auto;
  block-size: 7rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  background: var(--black);
  position: sticky;
  inset-block-start: 0;
  z-index: 1;
`;


class Header extends Component {

  render() {
    return headerStyle(
      {
        children: [
          createChildren(
            "img",
            {
              class: "logo",
              src: "../../icon/clapperboard.png",
              with: 106,
              height: 106,
            },
            ""
          ),
          new Filter().renderNav(),
          new Filter().renderSearch(),
        ],
      },
      ""
    );
  }
}

export default Header;
