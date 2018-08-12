import * as ApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

const receiveBooking = booking => {
  debugger
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

const receiveBookings = payload => {
  return {
    type: RECEIVE_BOOKINGS,
    payload
  };
};

const receiveBookingErrors = errors => {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
};

export const fetchBookings = () => dispatch => {
  return ApiUtil.fetchBookings()
    .then(payload => dispatch(receiveBookings(payload)));
};

export const createBooking = (spotId, booking) => dispatch => {
  return ApiUtil.createBooking(spotId, booking)
    .then(booking => dispatch(receiveBooking(booking)
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ));
};

export const editBooking = booking => dispatch => {
  return ApiUtil.editBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ));
};

export const deleteBooking = id => dispatch => {
  return ApiUtil.deleteBooking(id)
    .then(booking => dispatch(receiveBooking(null)));
};
