import { render } from "./react-dom.js";

export function createElement(type, props, content) {
  const $element = document.createElement(type);

  $element.textContent = content;

  for (const key in props) {
    if(key === 'children'){
      render(props[key],$element);
    }else{
      $element.setAttribute(key, props[key]);
    }
  }

  return $element;
}

export function createChildren(type, props, content) {
  return createElement(type, props, content);
}