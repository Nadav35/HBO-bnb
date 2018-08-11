import { connect } from 'react-redux';
import { findHost } from '../../reducers/selectors';

import {
  fetchSpot,
  editSpot,
  deleteSpot }
    from '../../actions/spot_actions';

import SpotShow from './spot_show';

const msp = (state, ownProps) => {
  debugger
  const spotId = parseInt(ownProps.match.params.spotId);
  const spot = state.entities.spots[spotId];
  const host = findHost(state.entities, spotId);
  return {
    spotId,
    spot,
    host
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
    editSpot: spot => dispatch(editSpot(spot)),
    deleteSpot: id => dispatch(deleteSpot(id))
  };

};

export default connect(msp, mdp)(SpotShow);
