import { RECEIVE_SPOT_ERRORS, RECEIVE_SPOT } from '../actions/spot_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const spotErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOT:
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_SPOT_ERRORS:
        return action.errors;
    default:
      return state;
  }
};

export default spotErrorsReducer;
