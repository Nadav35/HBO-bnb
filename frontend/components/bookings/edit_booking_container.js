import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { editBooking, fetchBooking } from '../../actions/booking_actions';
import EditBookingForm from './edit_booking_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
      errors: state.errors.session,
      bookingId: state.ui.payload.opArg,
      booking: state.entities.bookings[state.ui.payload.opArg]

  };
};

const mdp = dispatch => {
  return {
      editBooking: (bookingId, booking) => dispatch(editBooking(bookingId, booking)),
      closeModal: () => dispatch(closeModal()),
      clearErrors: () => dispatch(clearErrors()),
      fetchBooking: id => dispatch(fetchBooking(id))

  };
};

export default connect(msp, mdp)(EditBookingForm);
