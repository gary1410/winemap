$( document ).ready(function() {

  google.maps.event.addDomListener(window, 'load', initializeMap);

});

function initializeMap() {

  var mapCenter = new google.maps.LatLng(38.2590465, -122.5915786);
  var mapOptions = {
    zoom: 20,
    center: mapCenter
  }
  var mapCanvas = document.getElementById('map-canvas')
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var bounds = new google.maps.LatLngBounds();

  mapLoop( map, bounds );

  }

  function mapLoop (map, bounds) {
    var wineryLocations = gon.wineries // gon.wineries is from the index.html.erb

    for ( i = 0 ; i < wineryLocations.length ; i++ ) {
      var title = wineryLocations[i].title;
      var position = new google.maps.LatLng(wineryLocations[i].latitude, wineryLocations[i].longitude);
      bounds.extend(position);
      markWineries( )
    }

  function markWineries(){
    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title
    });
    map.fitBounds(bounds);
  }

}
