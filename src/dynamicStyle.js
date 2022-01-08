import ListMovie from "./components/list-movie.js";

let pageLoad = 1;

export async function dynamicStyle() {

  const $listMovie = document.querySelector(".containerMovieStyle");

  const handleIntersection = async (entries) => {

    if (entries[0]["isIntersecting"] === true) {
      const listMovie = await new ListMovie({ page: ++pageLoad }).render();
      listMovie.forEach(($el) => {
        $listMovie.appendChild($el);
      });
    }
  };

  const observe = new IntersectionObserver(handleIntersection);
  observe.observe(document.querySelector(".colaider"));





}

