import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import { editSpot } from '../../actions/spot_actions';
import EditBookingForm from './edit_booking_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    editSpot: spot => dispatch(editSpot(spot)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(msp, mdp)(EditBookingForm);
