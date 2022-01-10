import ListMovie from "../components/list-movie.js";
import Filter from "../components/filter.js"

let pageLoad = 1;

export async function scrollInfinity(filter = '') {
  const $listMovie = document.querySelector(".containerMovieStyle");
  const $button = document.querySelectorAll(".filter");

  const handleIntersection = async (entries) => {
    if (entries[0]["isIntersecting"] === true) {
      const listMovie = await new ListMovie({
        page: ++pageLoad,
        filter,
      }).render();
      listMovie.forEach(($el) => {
        $listMovie.appendChild($el);
      });
    }
  };

  const observe = new IntersectionObserver(handleIntersection);
  observe.observe(document.querySelector(".colaider"));

  $button.forEach(($el) => {
    $el.addEventListener("click", () => {
      observe.disconnect();
    });
  });
}

