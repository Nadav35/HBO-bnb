import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  DELETE_BOOKING
} from '../actions/booking_actions';

import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING:
      const newBooking = { [action.booking.id]: action.booking};
      return merge({}, state, newBooking);

    case RECEIVE_BOOKINGS:
    if (Object.values(action.payload).length > 0) {
      return action.payload.bookings;
    } else {
      return {};
    }
    break;
    case DELETE_BOOKING:
      return {};

    default:
      return state;
  }
};

export default bookingsReducer;
