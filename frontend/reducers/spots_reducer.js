import merge from 'lodash/merge';
import {
  RECEIVE_SPOT,
  RECEIVE_SPOTS,
  RECEIVE_SPOT_ERRORS
} from '../actions/spot_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newSpot = { [action.spot.id]: action.bench };
      return merge({}, state, newSpot);
    default:
      return state;

  }

};

export default spotsReducer;
