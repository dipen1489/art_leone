
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(37.880706, 15.306902)
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 18,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: true,
        // styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // var addresses = ['Brooklyn'];

    var icon = {
        url: "images/marker.png", // url
        scaledSize: new google.maps.Size(75, 75), // size
    };

    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: icon
    });

    // const position = { lat: -25.344, lng: 131.031 };
    // // Request needed libraries.
    // //@ts-ignore
    // const { Map } = new google.maps.importLibrary("maps");
    // const { AdvancedMarkerElement } = new google.maps.importLibrary("marker");
  
    // // The map, centered at Uluru
    // map = new Map(document.getElementById("map"), {
    //   zoom: 4,
    //   center: position,
    //   mapId: "DEMO_MAP_ID",
    // });
  
    // // The marker, positioned at Uluru
    // const marker = new AdvancedMarkerElement({
    //   map: map,
    //   position: position,
    //   title: "Uluru",
    // });



    
}
google.maps.event.addDomListener(window, 'load', init);