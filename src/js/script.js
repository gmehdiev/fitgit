$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 500,
        adaptiveHeight: false,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icon/chevron-left-solid.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icon/chevron-right-solid.png"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1050,
                settings: {
                  dots: false,
                  arrows: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
              }
        ]
      });
  });