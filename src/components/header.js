import { createElement, createChildren } from "../lib/react-element.js";
import { Component } from "../lib/react.js";
import styledComponent from "../lib/styled-components.js";

const HeaderStyle = styledComponent.header`
  inline-size: auto;
  block-size: 7rem;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const navStyle = styledComponent.nav`
  inline-size: auto;
  block-size: 30px;
  margin: 0;
  display: flex;  
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
const aStyle = styledComponent.a`
  text-decoration: none;
  user-select: none;
  color: var(--white);
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
`
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
                ulStyle(
                  {
                    children: [
                      liStyle({ children: aStyle({ href: '#' }, "Todas") },),
                      liStyle({ children: aStyle({ href: '#' }, "Más valoradas") },),
                      liStyle({ children: aStyle({ href: '#' }, "Menos valoradas") },),
                    ],
                  }, ''
                )
              ],
            },
            ""
          ),
          formStyle({
            children: [
              inputSearchStyle({ type: "search", name: "search", id: "search", placeholder: "Busca tu Pelicula" }, ''),
              containerButtomStyle({
                class: 'containerButtom', children: [
                  inputButtomStyle({ type: "submit", value: "" }, ''),
                  iconSearchStyle({ class: 'icon-icon-search' }, '')
                ]
              }, '')
            ]
          })
        ],
      },
      ""
    );
  }
}

export default Header;
