import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import Filter from "./filter.js";
import styledComponent from "../lib/styled-components.js";

const headerStyle = styledComponent.header`
  inline-size: auto;
  block-size: 7rem;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
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
