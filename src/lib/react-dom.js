export function render(component, container){
  if(component instanceof Element){
    container.append(component);
  }else{
    container.append(component.render());
  }
}


