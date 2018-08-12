import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS
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
      return action.payload.spots;

    default:
      return state;
  }
};

export default bookingsReducer;
