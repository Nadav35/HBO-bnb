import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { formatBookings } from '../../reducers/selectors';

import {
   fetchBookings,
   editBooking,
   deleteBooking }
from '../../actions/booking_actions';

const msp = (state) => {
  return {
    spots: state.entities.spots,
    currentUser: state.session.currentUser,
    bookings: formatBookings(state.entities.bookings)
  };
};

const mdp = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    editBooking: booking => dispatch(editBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id))
  };
};

export default connect(msp, mdp)(BookingsShow);
