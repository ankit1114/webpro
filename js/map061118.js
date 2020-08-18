(function ($) {
  	   $(document).ready(function($) {
                initialize();
            });
            function normalIcon() {
                return {
                  url: 'http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png'
                };
            }
            var map;
            function initialize() {
                var coordinates = Drupal.settings.webpro.coordinates;
                //console.log(coordinates);
                var ww = jQuery(window).width();
                var lat = 0;
                var long = 0;

                if(ww > 1024){
                    lat = 51.609617;
                    long = -0.324811;
                }else{
                    lat = 51.612930;
                    long = -0.276880;
                }

                var myOptions = {
                    zoom: 14,
                    //center: new google.maps.LatLng(51.6055750, -0.2942425),
                    center: new google.maps.LatLng(lat, long),
		    scrollwheel: false,
            	    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: true,

                }
                var map_canvas = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

                for (var i = 0; i < coordinates.length; i++) {
                    var iconbase = '/' + coordinates[i][3] + '/img/map-marker.png';
                    //console.log(iconbase);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(51.612930, -0.276880),
                        map: map_canvas,
                        title: coordinates[i][2],
                        icon: iconbase,

                    });
                }
            }

}(jQuery));
