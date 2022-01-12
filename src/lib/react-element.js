import { render } from "./react-dom.js";

export function createElement(type, props, content) {
  const $element = document.createElement(type);

  $element.textContent = content;

  for (const key in props) {
    if(key === 'children'){
      if (Array.isArray(props[key])) {
        props[key].forEach((el) => {
            render(el, $element);
        });
      } else {
        render(props[key], $element);
      }
    }else if (key.startsWith("on")) {
      const evento = key.replace('on','').toLowerCase()
      if (evento === "resize") {
        window.addEventListener(evento, props[key]);
      }else{
        $element.addEventListener(evento, props[key]);
      }
    } else {
      $element.setAttribute(key, props[key]);
    }
  }

  return $element;
}

export function createChildren(type, props, content) {
  return createElement(type, props, content);
}