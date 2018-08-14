import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
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
    case RECEIVE_SPOT:
      debugger
      const user = { [action.payload.user.id]: action.payload.user};
      return merge({}, state, user);
    default:
      return state;
  }

};


export default usersReducer;
