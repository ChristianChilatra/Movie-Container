import { createElement } from "./react-element.js";

const container = ["header", "div"];

const styledComponent = {};

container.forEach((el) => {
  styledComponent[el] = function (string) {
    return function (props, content) {
      return createElement(el, { style: string, ...props }, content);
    };
  };
});

export default styledComponent;
