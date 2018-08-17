import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      if (action.currentUser){
        return merge({}, state, { [action.currentUser.id]: action.currentUser });
      }
      return state;
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:
      const users = action.payload.users;
      return merge({}, state, users);
    // case RECEIVE_REVIEW:
    //
    //   const newState = merge({}, state);
    //   newState.reviewers[action.payload.reviewer.id] = action.payload.reviewer;
    //   return newState;
    case RECEIVE_SPOT:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }

};


export default usersReducer;
