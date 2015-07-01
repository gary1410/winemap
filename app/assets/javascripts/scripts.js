$( document ).ready(function() {

  google.maps.event.addDomListener(window, 'load', initializeMap);

});

function initializeMap() {

  var mapCenter = new google.maps.LatLng(38.2590465, -122.5915786);

  var mapOptions = {
    zoom: 13,
    center: mapCenter
  }

  var mapCanvas = document.getElementById('map-canvas')

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var wineryLocations = locations // locations was defined when winery#index was called

  for ( i = 0 ; i < wineryLocations.length ; i++ ) {
    var title = wineryLocations[i][0];
    var position = new google.maps.LatLng(wineryLocations[i][1], wineryLocations[i][2]);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title
    });
  }
}
