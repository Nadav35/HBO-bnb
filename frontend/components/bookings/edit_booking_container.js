import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { editBooking } from '../../actions/booking_actions';
import EditBookingForm from './edit_booking_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
      errors: state.errors.booking,
      bookingId: state.ui.payload.opArg,
      booking: state.entities.bookings[state.ui.payload.opArg]

  };
};

const mdp = dispatch => {
  return {
      editBooking: (booking) => dispatch(editBooking(booking)),
      closeModal: () => dispatch(closeModal()),
      clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(msp, mdp)(EditBookingForm);
