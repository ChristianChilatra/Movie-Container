export function dynamicStyle(){

  function bannerStyle(){

    const $banner = document.querySelector('.banner')
    const $containerMovie = document.querySelector(".containerMovie");
    const $movieBanner = document.querySelectorAll(".movie-banner");

    $movieBanner.forEach( $el =>{
      $el.style.width = `${$banner.clientWidth}px`;
    })

    window.addEventListener('resize', ()=>{
      $movieBanner.forEach(($el) => {
        $el.style.width = `${$banner.clientWidth}px`;
      });
      $banner.style.height = `${$movieBanner[0].clientHeight}px`;
    })

    $banner.style.height = `${$movieBanner[0].clientHeight}px`;
  }

  bannerStyle()

}