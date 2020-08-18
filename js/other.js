
function setHeight() {
  top_header = jQuery(".main-header").height();
  footer_height = jQuery(".main-footer").outerHeight();
  windowHeight = jQuery(window).innerHeight();
  final_height = windowHeight - (top_header + footer_height);
  jQuery('.home-banner').css('height', final_height);
  
  jQuery('.home-banner-slider .bx-viewport').css('height', final_height);
  jQuery('.mainSlider').css('height', final_height);
  jQuery('.home-banner-slider li').css('height', final_height);
}
  
jQuery(document).ready(function ($) {
  setHeight();
  
  $(window).scroll(function(){
    var sticky = $('header.header'),
        scroll = $(window).scrollTop();
    var windowWidth = $(window).width();
      //if (scroll >= 195 && windowWidth >= 1200) 
    if (scroll >= 195) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(window).resize(function () {
   setHeight();
  });
});