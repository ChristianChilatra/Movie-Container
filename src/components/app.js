import {Component} from '../lib/react.js'
import { createElement, createChildren } from '../lib/react-element.js'
import styledComponent from "../lib/styled-components.js";

const AppStyle = styledComponent.div`
  color: red;
`;

class App extends Component{
  render(){
    return createElement('header',{
      children: AppStyle({},'Prueba')
    },'')
  }
}

export default App