// Initialize and add the map
function initMap() {
    // Location of wateray
    const waterway = { lat: 33.871204, lng: -78.549307 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: waterway,
    });
    // Marker gets placed at desired point for waterway
    const marker = new google.maps.Marker({
      position: waterway,
      map: map,
    });
  }