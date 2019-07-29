import {
  connect
} from 'react-redux';
import React from 'react';
import {
  updateFilter
} from '../../actions/filter_actions';
import {
  fetchSpots,
  deleteSpot
} from '../../actions/spot_actions';
import ShowFilteredSpots from './show_filtered_spots';
import {
  openModal
} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    spots: Object.values(state.entities.spots),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    lat: new URLSearchParams(ownProps.location.search).get('lat'),
    lng: new URLSearchParams(ownProps.location.search).get('lng'),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    openModal: () => dispatch(openModal()),
    deleteSpot: id => dispatch(deleteSpot(id))
  };
};

export default connect(
  msp,
  mdp
)(ShowFilteredSpots);