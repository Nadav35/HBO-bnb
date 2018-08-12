import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { createBooking } from '../../actions/booking_actions';
import BookingForm from './booking_form';

const msp = ({ errors }) => {
  return {
      errors: errors.session
  };
};

const mdp = dispatch => {
  return {
      clearErrors: () => dispatch(clearErrors()),
      createBooking: (spotId, booking) => dispatch(createBooking(spotId, booking))
  };
};

export default(msp,mdp)(BookingForm);
