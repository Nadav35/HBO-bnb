
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObjects = {};
    spots.forEach(spot => spotsObjects[spot.id] = spot);

    spots.filter(spot => !this.markers[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot));

    Object.keys(this.markers)
      .filter(spotId => !spotsObjects[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));


  }
  removeMarker(marker) {
    //
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
    //
  }

  createMarkerFromSpot(spot){
    const latLng = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      spotId: spot.id
    });
    this.markers[marker.spotId] = marker;


  }
}
