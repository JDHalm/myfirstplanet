$(document).ready(function($){
   $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },3000);

    });  
    
        $('.orbit').slick({
         dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
      });
});