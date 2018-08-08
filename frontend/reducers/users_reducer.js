import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser){
        return merge({}, state, { [action.currentUser.id]: action.currentUser });
      }
      return state;
    default:
      return state;
  }

};

export default usersReducer;
