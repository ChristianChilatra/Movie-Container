import {Component} from '../lib/react.js'
import { createElement, createChildren } from '../lib/react-element.js'
import styledComponent from "../lib/styled-components.js";
import Header from './header.js';
import Banner from './banner.js';
import { buildData } from '../services/data.js';

const AppStyle = styledComponent.div`
  background: transparent;
  inline-size: auto;
  block-size: 100vh;
  margin: 0 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem
`;

class App extends Component{
  render(){
    buildData()
    return AppStyle({
      class: 'wrapper',
      children: [new Header().render(), new Banner().render(),]
    },'')
  }
}

export default App