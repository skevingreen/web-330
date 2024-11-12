'use strict';
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House Directions
    Author: Scott Green
    Date: November 11, 2024

    Filename: js10b.js
*/

// Function to set up and display the Oak Top House Map
function initMap() {
  // Page objects
  let displayMap = document.getElementById('displayMap');
  let routeBox = document.getElementById('routeBox');
  let oakTopHouse = { lat: 39.96118, lng: -82.99879 };

  let myMap = new google.maps.Map(displayMap, {
    zoom: 11,
    center: oakTopHouse,
    fullscreenControl: false
  });

  // Add a marker for the Oak Top House
  new google.maps.Marker({
    position: oakTopHouse,
    map: myMap,
    title: "Oak Top House"
  });

  // Get the device's current position
  navigator.geolocation.getCurrentPosition(getPos, handleError);

  function getPos(pos) {
    let myPosition = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    }

    console.log(myPosition);

    // Set up direction service and rendering
    let routeFind = new google.maps.DirectionsService();
    let routeDraw = new google.maps.DirectionsRenderer();

    let myRoute = {
      origin: myPosition,
      destination: oakTopHouse,
      travelMode: "DRIVING"
    }

    // Generate directions for the route
    routeFind.route(myRoute, function(result, status) {
      if (status == "OK") {
        routeDraw.setDirections(result);
        // Display route and directions
        routeDraw.setMap(myMap);
        routeDraw.setPanel(routeBox);
      } else {
        routeBox.textContent = "Directions Unavailable: " + status;
      }
    });
  }

  // In case of geolocation error
  function handleError(err) {
    console.log("Geolocation error: " + err.message);
  }
}
