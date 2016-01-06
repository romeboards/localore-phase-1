$(document).ready(function(){

  var $hero = $('.hero');
  var $heroContent = $('.hero-content');
  var $header = $('header');
  var faSVG = $('.fa-logo svg')[0];


  $(window).scroll(function(){
    if($(this).scrollTop() >= 40){  $header.addClass('scrolled');
    } else { $header.removeClass('scrolled'); }
  });

  if($(window).width() >= 768) $hero.height($heroContent.outerHeight());

  $(window).resize(function () {
    if($(window).width() >= 768) $hero.height($heroContent.outerHeight());
  });

  if(navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
    console.log('hmm');
    $('#mc_embed_signup').find('form').removeAttr('target');
  }

  $('.carousel').slick({
    dots: true,
    speed: 350,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          speed: 250,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



});
