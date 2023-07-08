var elHeader = document.querySelector("body");
var elButton = document.querySelector(".site-header__btn");

elButton.addEventListener("click", () => {
    elHeader.classList.toggle("site-header--active");
}); 

var elBody = document.querySelector("body");
var elButtton = document.querySelector(".site-header__mode");

elButtton.addEventListener("click", () => {
    elBody.classList.toggle("dark-theme");
});

const rotateButton = document.querySelector('.site-header__mode');

rotateButton.addEventListener('click', function() {
  rotateButton.classList.toggle('site-header__mode--rotate');
});


$(document).ready(function(){
  $('.customers__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});