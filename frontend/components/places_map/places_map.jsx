import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 39.0473,
    lng: -95.6752
  },
  zoom: 3
};

class PlacesMap extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // if (this.props.lat) {
    //   this.map = new google.maps.Map(this.mapNode, {
    //     center: {
    //       lat: parseInt(this.props.lat),
    //       lng: parseInt(this.props.lng)
    //     },
    //     zoom: 8
    //   });
    //   const bounds = this.getBounds();
    //   this.props.updateFilter('bounds', bounds);
    //   // debugger;

    // } else {
    //   this.map = new google.maps.Map(this.mapNode, mapOptions);
    // }
    this.setMap();

  }

  setMap() {

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // debugger;
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();
  }

  setMarkers() {
    // debugger
    this.MarkerManager.updateMarkers(this.props.spots);
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    // debugger;
    if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
      if (this.props.lat) {
        console.log('here');

        this.map.setCenter(new google.maps.LatLng(this.props.lat, this.props.lng));
        this.map.setZoom(7);
        const bounds = this.getBounds();
        this.props.updateFilter('bounds', bounds);
        this.setMarkers();
      } else {
        this.map.setCenter(new google.maps.LatLng(mapOptions.center.lat, mapOptions.center.lng));
        this.map.setZoom(mapOptions.zoom);
        this.props.updateFilter();
        this.setMarkers();
      }

    } else {
      if (this.props.spots.length > 0 && this.props.spots.length !== prevProps.spots.length) {
        this.setMarkers();
        console.log('here2');

      }
    }
    // if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
    //   // debugger;
    //   if (!this.props.lat) {
    //     // if (this.props.fetchSpots) {
    //     //   this.props.fetchSpots();
    //     // }
    //     // window.scrollTo(0, 0);
    //     this.props.updateFilter();
    //     if (this.props.spots.length > 0) {
    //       // debugger
    //       this.map.setCenter(new google.maps.LatLng(mapOptions.center.lat, mapOptions.center.lng));
    //       this.map.setZoom(mapOptions.zoom);
    //       this.setMarkers();

    //     }
    //     // debugger
    //     // this.setMap();
    //   } else {
    //     // debugger;
    //     this.map.setCenter(new google.maps.LatLng(this.props.lat, this.props.lng));
    //     this.map.setZoom(7);
    //     const bounds = this.getBounds();
    //     this.props.updateFilter('bounds', bounds);
    //   }
    //   // this.map.setCenter(new google.maps.LatLng(this.props.lat, this.props.lng));
    //   // this.map.setZoom(7);
    //   // const bounds = this.getBounds();
    //   // this.props.updateFilter('bounds', bounds);

    // } else {
    //   // debugger
    //   if (this.props.spots.length > 0 && prevProps.spots.length === 0) {
    //     this.setMarkers();
    //   }
    // }

    // this.MarkerManager.updateMarkers(this.props.spots);


  }

  getBounds() {
    let bounds;
    if (this.map.getBounds()) {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
    }
    return bounds;
  }

  registerListeners() {
    // google.maps.event.addListener(this.map, 'drag', () => {
    //   const { north, south, east, west } = this.map.getBounds().toJSON();
    //   const bounds = {
    //     northEast: { lat: north, lng: east },
    //     southWest: { lat: south, lng: west }
    //   };
    //   // debugger
    //   this.props.updateFilter('bounds', bounds);
    // });

    google.maps.event.addListener(this.map, 'idle', () => {
      // debugger
      // const { north, south, east, west } = this.map.getBounds().toJSON();
      // const bounds = {
      //   northEast: { lat: north, lng: east },
      //   southWest: { lat: south, lng: west }
      // };
      // debugger
      // const bounds = this.getBounds();

      // this.props.updateFilter('bounds', bounds);
      // this.setMarkers();

    });

    // google.maps.event.addListener(this.map, 'click', event => {
    //   debugger
    //   const coords = getCoordsObj(event.latLng);
    //   this.handleClick(coords);
    // });
  }

  handleMarkerClick(spot) {
    // debugger
    this.props.history.push(`/api/spots/${spot.id}`);
  }

  render() {
    return <div className="map-container" ref={map => (this.mapNode = map)} />;
  }
}

export default withRouter(PlacesMap);
