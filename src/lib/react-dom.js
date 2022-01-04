export function render(component, container){
  if(component instanceof Element){
    container.append(component);
  }else{
    console.log(component);
    container.append(component.render());
  }
}


