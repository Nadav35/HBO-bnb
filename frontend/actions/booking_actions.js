import * as ApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const START_LOADING_ALL_SPOTS = 'START_LOADING_ALL_SPOTS';

const receiveBooking = booking => {
  return {
    type: RECEIVE_BOOKING,
    booking
  };
};

export const startLoadingAllSpots = () => {
  return {
    type: START_LOADING_ALL_SPOTS
  };
};

export const receiveDeleteBooking = () => {
  return {
    type: DELETE_BOOKING
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
  dispatch(startLoadingAllSpots());
  return ApiUtil.fetchBookings()
    .then(payload => dispatch(receiveBookings(payload)));
};

export const fetchBooking = id => dispatch => {
  return ApiUtil.fetchBooking(id)
    .then(booking => dispatch(receiveBooking(booking)));
};

export const createBooking = (spotId, booking) => dispatch => {
  return ApiUtil.createBooking(spotId, booking)
    .then(booking => dispatch(receiveBooking(booking)
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ));
};

export const editBooking = (booking) => dispatch => {
  return ApiUtil.editBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)
  ), err => (
    dispatch(receiveBookingErrors(err.responseJSON))
  ));
};

export const deleteBooking = id => dispatch => {
  dispatch(startLoadingAllSpots());
  return ApiUtil.deleteBooking(id)
    .then(()=> dispatch(receiveDeleteBooking()));
};
