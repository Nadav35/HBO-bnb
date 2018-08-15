import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ListingFormContainer from '../listing_form/listing_form_container';
import EditBookingContainer from '../bookings/edit_booking_container';
import EditSpotContainer from '../listing_form/edit_spot_container.js';

function Modal({payload, closeModal}) {
  if (!payload) {
    return null;
  }
  let component;
  switch (payload.modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'create_listing':
      component = <ListingFormContainer />;
      break;
    case 'edit_booking':
      component = <EditBookingContainer />;
      break;
    case 'edit_spot':
      component = <EditSpotContainer />;
      break;

    default:
      return null;

  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const msp = (state) => {
  return {
    payload: state.ui.payload
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
