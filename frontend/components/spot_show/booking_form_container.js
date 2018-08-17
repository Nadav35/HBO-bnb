import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
      errors: state.errors.booking,
      spots: state.entities.spots,
      currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
      clearErrors: () => dispatch(clearErrors()),
      createBooking: (spotId, booking) => dispatch(createBooking(spotId, booking)),
      openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp,mdp)(BookingForm);
