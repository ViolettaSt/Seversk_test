$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 10,
    // stagePadding: 20,
    // mouseDrag: false
    // loop: true,
    // autoplay: true,
    // autoplaySpeed: 1000,
    items: 3,
    dots: false,
    pagination : false,
    nav: true,
    navText: ["<img src=\"img/arrow_left.png\" style=\"position: absolute; top: 30%; left: -10%; padding: 40px 40px;\">","<img src=\"img/arrow-right.png\" style=\"position: absolute; top: 30%; right: -10%; padding: 40px 40px;\">"],
    responsive: {
        0: {
          items: 1,
          nav: false
        },
        640: {
          items: 1,
          nav: false
        },
        800: {
          items: 1
        },

    }
  });
});
