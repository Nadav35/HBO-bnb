import { RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING } from '../actions/booking_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const bookingErrorsReducer = (state = [], action) => {
  // 
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_BOOKING_ERRORS:
        return action.errors;
    default:
      return state;
  }
};

export default bookingErrorsReducer;
