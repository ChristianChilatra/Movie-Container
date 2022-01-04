import { createElement } from "./react-element.js";

const container = ["header", "div","img", "h1", "h2", "nav", "input"];

const styledComponent = {};

container.forEach((el) => {
  styledComponent[el] = function (string) {
    return function (props, content) {
      return createElement(el, { style: string, ...props }, content);
    };
  };
});

export default styledComponent;
