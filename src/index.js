import { render } from "./lib/react-dom.js";
import App from "./components/app.js";

const $app = document.querySelector("body");
const app = new App();

render(app.render(), $app);




