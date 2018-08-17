import merge from 'lodash/merge';
import {
  RECEIVE_SPOT,
  RECEIVE_SPOTS,
  RECEIVE_SPOT_ERRORS,
  DELETE_SPOT
} from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';

const spotsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:
      if (!action.payload.spots) {
        return {};
      } else {
        return action.payload.spots;
      }
    break;
    case RECEIVE_SPOT:
      const newSpot = { [action.payload.spot.id]: action.payload.spot };
      return merge({}, state, newSpot);
    case DELETE_SPOT:
      return {};
    case RECEIVE_REVIEW:
      const newState = merge({}, state);
      // newState[action.payload.review.spotId].reviewIds.push(action.payload.review.id);
      newState[action.payload.review.spotId].average_rating = action.payload.average_rating;
      return newState;
    default:
      return state;

  }

};

export default spotsReducer;
