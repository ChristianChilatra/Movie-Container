export function dynamicStyle(){

  const bannerStyle = () =>{

    const $bannerWidth = document.querySelector('.banner')
    const $movieBannerWidth = document.querySelectorAll(".movie-banner");

    $movieBannerWidth.forEach( $el =>{
      $el.style.width = `${$bannerWidth.clientWidth}px`;
    })

  }

  bannerStyle()

}