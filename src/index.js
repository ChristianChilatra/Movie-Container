import {render} from './lib/react-dom.js'
import App from './components/app.js'
import { dynamicStyle } from "./dynamicStyle.js";

const $app = document.querySelector('#root')

render(new App(), $app);
dynamicStyle()
