import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import { createSpot } from '../../actions/spot_actions';
import ListingForm from './listing_form';
import { closeModal, openModal } from '../../actions/modal_actions';


const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    createSpot: spot => dispatch(createSpot(spot)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(msp, mdp)(ListingForm);
