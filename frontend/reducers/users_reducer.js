import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SPOTS, RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      if (action.currentUser){
        return merge({}, state, { [action.currentUser.id]: action.currentUser });
      }
      return state;
    case RECEIVE_SPOTS:
      const users = action.payload.users;
      return merge({}, state, users);
    case RECEIVE_SPOT:
      const user = action.payload.user;
      return merge({}, state, user);
    default:
      return state;
  }

};

export default usersReducer;
