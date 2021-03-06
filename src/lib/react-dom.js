import {scrollInfinity} from '../utils/scroll-infinity.js'

export async function render(component, container){
  if(component instanceof Element){
    container.append(component);
  }else if (component instanceof Promise) {
    container.append(await component);
    scrollInfinity();
  }else {
    container.append(component.render());
  }
}


