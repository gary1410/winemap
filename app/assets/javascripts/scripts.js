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

  var wineryLocations = [
    ["CARNEROS VINTNERS", 38.2493358, -122.4981057],
    ["ROBLEDO FAMILY WINERY", 38.2473916, -122.4834992],
    ["COONEY PROPERTIES 20 LLC OWNER", 38.241682, -122.480983],
    ["ANABA WINES", 44.9101929, -72.370795],
    ["ELSBREE CHARLES N JR TR", 38.5554739, -122.783964]
  ]

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
