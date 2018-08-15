import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.7758,
    lng: -122.435
  },
  zoom: 13
};

class PlacesMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();

  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const {north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(spot) {
    this.props.history.push(`/api/spots/${spot.id}`);
  }

  handleClick(coords) {
    debugger
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {

    return (
      <div className="map-container"
        ref={map => this.mapNode = map}>
      </div>
    );
  }
}

export default withRouter(PlacesMap);
