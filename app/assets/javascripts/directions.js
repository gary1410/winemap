function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var mapCenter = new google.maps.LatLng(38.2590465, -122.5915786);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: mapCenter
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));

  calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var routeLocations = gon.winery_tour
  var start = routeLocations.shift();
  var end = routeLocations.pop();
  var startLocation = new google.maps.LatLng(start[0], start[1]);
  var endLocation = new google.maps.LatLng(end[0], end[1]);
  var wayPoints = convertWayPointsToLatLon(routeLocations);
  directionsService.route({
    origin: startLocation,
    destination: endLocation,
    waypoints: wayPoints,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

function convertWayPointsToLatLon(latLon) {
  var latLonArray = [];
  for (var i=0; i < latLon.length; i++) {
    var newLatLon = new google.maps.LatLng(latLon[i][0], latLon[i][1])
    latLonArray.push({
      location: newLatLon,
      stopover: true
    });
  }
  return latLonArray;
}
