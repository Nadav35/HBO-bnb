import { connect } from 'react-redux';
import { findHost } from '../../reducers/selectors';

import {
  fetchSpot,
  editSpot,
  deleteSpot }
    from '../../actions/spot_actions';
import { deleteReview } from '../../actions/review_actions';

import SpotShow from './spot_show';

const msp = (state, ownProps) => {


  const spot = state.entities.spots[ownProps.match.params.spotId];
  // const host = findHost(state.entities, spot);
  // const host = state.entities.users.user;
  // const reviewers = state.entities.users.reviewers;
  const reviews = Object.values(state.entities.reviews);
  const users = state.entities.users;
  const currentUser = state.session.currentUser;
  return {
    spot,
    reviews,
    currentUser,
    users
  };
};

const mdp = dispatch => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id)),
    editSpot: spot => dispatch(editSpot(spot)),
    deleteSpot: id => dispatch(deleteSpot(id)),
    deleteReview: id => dispatch(deleteReview(id))
  };

};

export default connect(msp, mdp)(SpotShow);
