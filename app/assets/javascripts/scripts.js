HelloWinery = {}
HelloWinery.Maps = {
  initializeMap: function(dataSet) {
    var mapCenter = new google.maps.LatLng(38.2590465, -122.5915786);
    var mapOptions = {
      zoom: 20,
      center: mapCenter
    }
    var mapCanvas = document.getElementById('map-canvas')
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var bounds = new google.maps.LatLngBounds();

    HelloWinery.Maps.mapLoop(map, bounds, dataSet);
  },

  mapLoop: function(map, bounds, dataSet) {
    dataSet.forEach(function(winery) {
      var config = {}
      config['map'] = map
      config['title'] = winery.title
      config['position'] = new google.maps.LatLng(winery.latitude, winery.longitude)
      bounds.extend(config['position'])
      placeMarker(config, bounds)
    })

    function placeMarker(config, bounds) {
      var marker = new google.maps.Marker(config);
      config['map'].fitBounds(bounds);
    }
  }  
}

$(document).ready(function() {
  // gon.wineries is from the index.html.erb
  google.maps.event.addDomListener(window, 'load', HelloWinery.Maps.initializeMap.call(this, gon.wineries));
});