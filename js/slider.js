'use strict'
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  let sectionDel = document.querySelector('#skill_sec');
  sectionDel.remove();
  let sectionAppend = document.querySelector('#abt_sec');
  let tmpl = templateSlider.content.cloneNode(true);
  sectionAppend.after(tmpl);

  $('.carousel-inner').owlCarousel({
    loop: true,
    margin: 20,
    // nav:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
}