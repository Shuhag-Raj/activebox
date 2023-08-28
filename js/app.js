// Header Menu
$(document).ready(function(){
    $('.collapse_btn').click(function(){
        $('.menu').slideToggle(600);
    });
});

// Swiper 
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
  });
//   VenoBox
// Img
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Video 
new VenoBox({
    selector: '.my-video-links',
});
// Call to action Button
$(document).ready(function() {
    $(window).scroll(function() {
      // Get the current vertical scroll position
      var scrollPosition = $(this).scrollTop();

      // If the scroll position is greater than or equal to 500px, show the button; otherwise, hide it
      if (scrollPosition >= 500) {
        $("#ctaBtn").fadeIn();
      } else {
        $("#ctaBtn").fadeOut();
      } 800;
    });
 
  }); 
