import merge from 'lodash/merge';
import {
  RECEIVE_SPOT,
  RECEIVE_SPOTS,
  RECEIVE_SPOT_ERRORS
} from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';

const spotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:
      if (action.payload.spots) {
        return action.payload.spots;
      } else {
        return state;
      }
    case RECEIVE_SPOT:
      const newSpot = { [action.payload.spot.id]: action.payload.spot };
      return merge({}, state, newSpot);
    default:
      return state;

  }

};

export default spotsReducer;
