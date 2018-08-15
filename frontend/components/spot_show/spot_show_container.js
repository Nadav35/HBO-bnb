import { connect } from 'react-redux';
import { findHost } from '../../reducers/selectors';

import {
  fetchSpot,
  editSpot,
  deleteSpot }
    from '../../actions/spot_actions';

import SpotShow from './spot_show';

const msp = (state, ownProps) => {
  const spot = state.entities.spots[ownProps.match.params.spotId];
  const host = findHost(state.entities, spot);
  const reviews = Object.values(state.entities.reviews);
  const users = state.entities.users;
  const currentUser = state.session.currentUser;
  return {
    spot,
    host,
    reviews,
    users,
    currentUser
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
