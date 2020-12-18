$(document).ready(function(){
    //Index-slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="52px"> <path fill-rule="evenodd"  opacity="0.902" fill="rgb(255,255,255)" d="M25.836,-0.001 L0.014,26.000 L25.836,52.001 L35.467,42.436 L19.145,26.000 L35.467,9.564 L25.836,-0.001 Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="52px"> <path fill-rule="evenodd"  opacity="0.902" fill="rgb(255, 255, 255)" d="M9.633,52.001 L35.455,26.000 L9.633,-0.001 L0.001,9.564 L16.324,26.000 L0.001,42.436 L9.633,52.001 Z"/></svg></button>'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      } 
    }
  ]
    });
    
    
    $('.slider-for').slick('goTo',3);
    $('.slider-nav').slick('goTo',3);
});

  