import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { formatBookings } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

import {
   fetchBookings,
   editBooking,
   deleteBooking }
from '../../actions/booking_actions';

const msp = (state) => {
  return {
    spots: state.entities.spots,
    currentUser: state.session.currentUser,
    bookings: formatBookings(state.entities.bookings),
    loading: state.ui.loading
  };
};

const mdp = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings()),
    editBooking: booking => dispatch(editBooking(booking)),
    deleteBooking: id => dispatch(deleteBooking(id)),
    openModal: (modal, opArg) => dispatch(openModal(modal, opArg))
  };
};

export default connect(msp, mdp)(BookingsShow);
