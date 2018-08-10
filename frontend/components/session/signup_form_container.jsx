import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import Sessionform from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign up',
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button className="switch-button" onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Sessionform);
