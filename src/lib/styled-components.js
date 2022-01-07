import { createElement } from "./react-element.js";

const container = ["header", "div","img", "h1", "h2", "nav", "input","ul","li","a","form","i","section","main"];

const styledComponent = {};

container.forEach((el) => {
  styledComponent[el] = function (string) {
    return function (props, content, value) {
      const setStyle = (value? value : '') + string
      return createElement(el, { style: setStyle, ...props }, content);
    };
  };
});

export default styledComponent;
