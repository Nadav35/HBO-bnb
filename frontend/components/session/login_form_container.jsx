import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import Sessionform from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    navLink: <Link to="/signup">Sign up</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(Sessionform);
