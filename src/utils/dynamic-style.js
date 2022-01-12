export function dynamicStyle(){

  const $logo = document.querySelector(".logo");
  let $iconSearchMobile = document.querySelector("#search-mobile");
  const $formSearch = document.querySelector(".search");
  console.log(window.screen.width);

  if (window.screen.width > 1999) {
    console.log("ok");
  }
}