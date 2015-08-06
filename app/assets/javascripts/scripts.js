HelloWinery = {}
HelloWinery.Maps = {}
HelloWinery.Maps.initializeMap = function() {

  var mapCenter = new google.maps.LatLng(38.2590465, -122.5915786);
  var mapOptions = {
    zoom: 20,
    center: mapCenter
  }
  var mapCanvas = document.getElementById('map-canvas')
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var bounds = new google.maps.LatLngBounds();

  HelloWinery.Maps.mapLoop(map, bounds);

}

HelloWinery.Maps.mapLoop = function (map, bounds) {
  // gon.wineries is from the index.html.erb
  gon.wineries.forEach(function(winery){
    var config = {}
    config['map'] = map
    config['title'] = winery.title
    config['position'] = new google.maps.LatLng(winery.latitude, winery.longitude)
    bounds.extend(config['position'])
    placeMarker(config)
  })

  function placeMarker(config){
    var marker = new google.maps.Marker(config);
    config['map'].fitBounds(bounds);
  }
}

$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', HelloWinery.Maps.initializeMap);
});