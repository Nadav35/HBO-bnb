import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { editSpot } from '../../actions/spot_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import ListingForm from './listing_form';

const msp = (state) => {
  return {
    errors: state.errors.spot,
    spotId: state.ui.payload.opArg,
    spot: state.entities.spots[state.ui.payload.opArg],
    currentUser: state.session.currentUser,
    formType: 'Edit'
  };
};

const mdp = dispatch => {
  return {
    processForm: (spotId, spot) => dispatch(editSpot(spotId, spot)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(ListingForm);
