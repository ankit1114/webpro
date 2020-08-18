(function($) {
  Drupal.behaviors.webprocheckout = {
    attach: function(context, settings) {
      $('select').niceSelect();
    }
  };
  $('select').niceSelect();
}(jQuery));


