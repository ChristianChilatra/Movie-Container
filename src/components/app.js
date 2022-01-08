import {Component} from '../lib/react.js'
import { createElement, createChildren } from '../lib/react-element.js'
import styledComponent from "../lib/styled-components.js";
import Header from './header.js';
import Banner from './banner.js';
import { buildData } from '../services/data.js';
import ListMovie from './list-movie.js';

const AppStyle = styledComponent.div`
  background: transparent;
  inline-size: auto;
  block-size: 100%;
  margin: 3rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const titleStyle = styledComponent.h1`
  font: var(--headline1);
  margin: 0;
`;
class App extends Component{
  async render(){

    buildData()

    let page = 1

    return createElement("body", {
      children: [
        new Header().render(),
        AppStyle(
          {
            class: "wrapper",
            children: [
              new Banner().render(),
              titleStyle({ class: "Title Filter" }, "Dinamic"),
              await new ListMovie({ page: page }).render(),
              await new ListMovie({ page: ++page }).render(),
              await new ListMovie({ page: ++page }).render(),
            ],
          },
          ""
        ),
      ],
    });
  }
}

export default App