import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";

const HeaderStyle = styledComponent.header`
  background: #4f5275;
  inline-size: auto;
  block-size: 7rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navStyle = styledComponent.nav`
  background: #8f5275;
  inline-size: 80px;
  block-size: 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

class Header extends Component {
  render() {
    console.log(HeaderStyle({}, ""));
    return HeaderStyle(
      {
        children: [
          createChildren(
            "img",
            {
              class: "logo",
              src: "../../img/logo-blockBuster.svg",
              with: 106,
              height: 64,
            },
            ""
          ),
          navStyle(
            {
              children: [
                createChildren(
                  "ul",
                  {
                    children: [
                      createChildren("li", {}, "Todas"),
                      createChildren("li", {}, "Más valoradas"),
                      createChildren("li", {}, "Menos valoradas"),
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
    );
  }
}

export default Header;
