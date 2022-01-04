import {Component} from '../lib/react.js'
import { createElement, createChildren } from '../lib/react-element.js'
import styledComponent from "../lib/styled-components.js";
import Header from './header.js';

const AppStyle = styledComponent.div`
  background: transparent;
  inline-size: auto;
  block-size: 100vh;
  margin: 0 4.8rem;
`;

class App extends Component{
  render(){
    return AppStyle({
      class: 'wrapper',
      children: new Header().render()
    },'')
  }
}

export default App