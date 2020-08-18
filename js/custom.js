/*(function($, Drupal) {
     Drupal.behaviors.webpro = {
          attach: function(context, settings) {

               

               


               function setupLabel() {
                    if ($('.label_check input').length) {
                         $('.label_check').each(function() {
                              $(this).removeClass('c_on');
                         });
                         $('.label_check input:checked').each(function() {
                              $(this).parent('label').addClass('c_on');
                         });
                    }
                    if ($('.label_radio input').length) {
                         $('.label_radio').each(function() {
                              $(this).removeClass('r_on');
                         });
                         $('.label_radio input:checked').each(function() {
                              $(this).parent('label').addClass('r_on');
                         });
                    }
               }
               $('.label_check, .label_radio').click(function() {
                    setupLabel();
               });
               setupLabel();

               var acc = document.getElementsByClassName("accordion");
               var i;

               for (i = 0; i < acc.length; i++) {
                 acc[i].addEventListener("click", function() {
                   this.classList.toggle("active");

                   var cat_add_on = this.nextElementSibling;
                   var current = this;
                    if (cat_add_on.style.height === "auto") {
                      cat_add_on.style.height = "0px";
                      current.innerHTML = 'Load more';  
                      $(this).removeClass("cross-accordian");
                      $(this).addClass("accordian");
                      cat_add_on.style.borderTop = "1px solid #e5e5e5"
                    
                    } else {
                      cat_add_on.style.height = "auto";
                      current.innerHTML = '<i class="fa fa-times" aria-hidden="true">';
                      $(this).addClass("cross-accordian");
                      $(this).removeClass("accordian");
                      cat_add_on.style.border = "none"
                      //document.getElementByClass(".view-display-id-block_1 h3").style.borderBottom = "none";
                    }
                 });
               }

               jQuery(document).ready(function() {

                    $(window).scroll(function(){
                      var sticky = $('header.header'),
                          scroll = $(window).scrollTop();
                      var windowWidth = $(window).width();

                      if (scroll >= 195 ) { $('.sticky-logo').css('display','block');$('.nonsticky-logo').css('display','none'); }
                      else {  $('.nonsticky-logo').css('display','block');$('.sticky-logo').css('display','none'); }
               });
                    
                    jQuery("form").each(function() {
                         var str = jQuery(this).attr('id');

                         jQuery('#' + str + ' .offer-service').click(function(event) {

                              var chkid = this.id;
                              var input_id = [];

                              $('#' + str + ' .offer-service').each(function() {
                                   var inp = $(this).find(':input');
                                   //console.log(inp.context.id);
                                   input_id.push(inp.context.id);
                              });

                              if (chkid.match(/edit-submitted-offers-and-services-1/) || (chkid === input_id[0])) {
                                   jQuery(chkid).attr("checked", true);
                                   jQuery('#' + str + ' #' + input_id[1]).attr("checked", false);
                                   jQuery('#' + str + ' #offer-validation').remove();
                              }
                              if (chkid.match(/edit-submitted-offers-and-services-2/) || (chkid === input_id[1])) {
                                   jQuery(chkid).attr("checked", true);
                                   jQuery('#' + str + ' #' + input_id[0]).attr("checked", false);
                                   jQuery('#' + str + ' .contact-check').attr("checked", false);
                                   jQuery('#' + str + ' #offer-validation').remove();
                              }
                         });

                         jQuery('#' + str + ' .contact-check').click(function(event) {

                              var input_id = [];
                              $('#' + str + ' .offer-service').each(function() {
                                   var inp = $(this).find(':input');
                                   input_id.push(inp.context.id);
                              });
                              
                              if (jQuery('#' + str + ' #' + input_id[1]).prop("checked") === true || jQuery('#' + str + ' #' + input_id[1]).prop("checked") === 'checked') {
                                   return false;
                              }

                         });

                         jQuery('#' + str).on('submit', function(event) {
                              
                              var input_id = [];
                              $('#' + str + ' .offer-service').each(function() {
                                   var inp = $(this).find(':input');
                                   input_id.push(inp.context.id);
                              });

                              if (input_id.length != 0) {
                                   if (((jQuery('#' + str + ' #' + input_id[0]).prop('checked') === false && jQuery('#' + str + ' #' + input_id[1]).prop('checked') === false)) || ((jQuery('#' + str + ' #' + input_id[0]).prop('checked') === undefined && jQuery('#' + str + ' #' + input_id[1]).prop('checked') === undefined))) {
                                        
                                        if (jQuery('#' + str + ' #offer-validation').length == 0) {
                                             jQuery('#' + str + ' .offer-main').append("<span id ='offer-validation' class='error' style='display:inline-block;'>Offers and Services field is required.</span>");
                                             return false;
                                        }
                                   }
                              }
                         });
                         
                    });
               });
          }

     };
}(jQuery));*/

jQuery(document).ready(function($) {

  $('.menu-dropdown-icon > a').on('click', function(e){
    e.preventDefault(); 
    $(this).parent().addClass('active-link');
    $(this).next('ul.megamenu-inner').toggleClass('dropdown-open');
  });
  /*$('.menu-back').on('click', function(){ 
      $('ul.megamenu-inner').removeClass('dropdown-open');
      $('.menu-dropdown-icon').removeClass('active-link');
  });*/

  var pageWidth = $(window).width(); 

  if (pageWidth > 1024) {
    $('.menu-dropdown-icon').hover(function(){
      $(this).find('ul.megamenu-inner').toggleClass('dropdown-open');
    });
  }

});

jQuery(document).ready(function($) {

    $('.menu-dropdown-icon a').on('click', function(){ alert('workign');
  
    });

    $(".scrollto").click(function(event) { 
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    
    $(".page-add-on .node-add-to-cart").click(function() {
        var buttonId = $(this).attr('id');
        var buttonIdIdSplit = buttonId.split('edit-submit-');
        var qty = $('.cart-quantity-' + buttonIdIdSplit[1]).val();
        $('.product-qty-' + buttonIdIdSplit[1]).val(qty);
    });
    /*$(window).load(function() {
        jQuery('#servParallax').parallax();
        jQuery('.bespoke-box-bg-image').parallax();
    });*/

    $('#news-wrap').masonry({
         "itemSelector": ".item",
         "columnWidth": ".grid-sizer",
    });

    /*size_li = $("#blog_listing li").size();

    x = 6;
    $('#blog_listing li:lt(' + x + ')').show();
    $('#loadMore').click(function() {

         x = (x + 3 <= size_li) ? x + 3 : size_li;
         $('#blog_listing li:lt(' + x + ')').delay(3000).fadeIn(0);
         var imageUrl = "wpdraft4.webprosites.co.uk/sites/all/themes/webpro/img/load-more.png";
         $('.loadMore').css('background-image', '');
    });
    $('#showLess').click(function() {
         x = (x - 5 < 0) ? 3 : x - 5;
         $('#blog_listing li').not(':lt(' + x + ')').hide();
    });*/


    $("#edit-combine").attr("placeholder", "Search Keywords");
    $('.st_sharethis_custom').before($('.st_sharethis_custom').html("<span>Share this post</span>"));

    $(".mobile-m.menu-mobile").click(function() {
         $(".header").toggleClass("active");
    });

    $('.scrollDown').click(function() {
         $('html, body').animate({
              scrollTop: $(".featuredMain").offset().top
         }, 1500);
    });

    if ($('#edit-submitted-choose-a-subject').hasClass("error")) {
         $('.formControl.slct').addClass('childHasError');
    }

    $('.otSlider').bxSlider({
         mode: 'horizontal',
         pager: false,
         controls: false,
         auto: true,
    });

    $('.mainSlider').bxSlider({
         mode: 'horizontal',
         pager: false,
         controls: true,
         auto: true,
         speed: 1300,
         pause: 17000,
         responsive: true,
    });
    
    $('#abtParallax').parallax("50%", 0.7);
    $('#servParallax01').parallax("50%", 0.7);

    var wow = new WOW({
         boxClass: 'wow', // animated element css class (default is wow)
         animateClass: 'animated', // animation css class (default is animated)
         offset: 0, // distance to the element when triggering the animation (default is 0)
         mobile: true, // trigger animations on mobile devices (default is true)
         live: true, // act on asynchronously loaded content (default is true)
         callback: function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
         },
         scrollContainer: null // optional scroll container selector, otherwise use window
    }
    );
    wow.init();

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-child').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
          var $this = $(this),
                  tabgroup = '.tabgroup'; //+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
                  target = $this.attr('href');
          others.removeClass('active');
          $this.addClass('active');
          $(tabgroup).children('div').hide();
          $(target).show();
    });

    $('.browse-button').click(function(e) {
          //alert("Working");
          e.preventDefault();
          var tab = $(this).attr("href");
          tabgroup = '.tabgroup'; //+$this.parents('.tabs').data('tabgroup'),
          $(tabgroup).children('div').hide();
          $('.view-theme-type-tabs .tabs li a').removeClass('active');
          $('.view-theme-type-tabs .tabs li a[href="' + tab + '"]').addClass('active');
          $('html, body').animate({
               'scrollTop': $(".view-id-uc_products .view-header").position().top
          });
          $(tab).show();
    });
});