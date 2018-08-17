import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.7758,
    lng: -122.435
  },
  zoom: 8
};

class PlacesMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.lat) {
      this.map = new google.maps.Map(this.mapNode,
      {
        center: {
          lat: parseInt(this.props.lat),
          lng: parseInt(this.props.lng)
        },
        zoom: 8
      });
      const bounds = this.getBounds();
      this.props.updateFilter('bounds', bounds);
    } else {
      this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lat !== nextProps.lat || this.props.lng !== nextProps.lng){
      this.map.setCenter(new google.maps.LatLng(nextProps.lat, nextProps.lng));
      const bounds = this.getBounds();
      this.props.updateFilter('bounds', bounds);

    }
  }

  getBounds() {
    let bounds;
    if (this.map.getBounds()) {
      const {north, south, east, west } = this.map.getBounds().toJSON();
      bounds = {
        northEast: { lat: north, lng: east},
        southWest: {lat: south, lng: west}
      };
    }
    return bounds;
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'drag', () => {
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
