import { RECEIVE_CURRENT_USER, LOGOUT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

let _defaultState = {
  currentUser: null
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case LOGOUT_USER:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
