import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class Sessionform extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === 'Sign up') {
      this.state = {
        email: '',
        username: '',
        password: ''
      };
    } else {
      this.state = {
        username: '',
        password: ''
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeView = this.removeView.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  removeView(e) {
    e.preventDefault();
    // let item = document.getElementById('modal');
    let item = document.getElementById('modal');
    item.classList.add('is-open');
  }

  getErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx ) => (
          <li key = {`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  emailInput() {
    return (
      <div className="input email">
        <input value={this.state.email}
          type="text"
          placeholder="Email address"
          onChange={this.update('email')}
          />
        <i className="fas fa-envelope-square"></i>
      </div>
    );
  }

  formFooter(){
    if (this.props.formType === 'Sign up') {
      return (
        <React.Fragment>
          <span>Alread have an Airbnb account?</span>
          <span className="button-alternative">{this.props.navLink}</span>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <span>Don't have an account?</span>
          <span className="button-alternative">{this.props.navLink}</span>
        </React.Fragment>
      );
    }
  }

  render() {
    const emailInp = this.props.formType === 'Sign up' ? this.emailInput() : null;

    return (
      <div className="modal" id="modal">
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <i className="fas fa-window-close"
            onClick={this.removeView}>
          </i>
          {this.getErrors()}
          <h1>{this.props.formType} to continue</h1>
          {emailInp}
          <div className="input username">
            <input value={this.state.username}
              type="text"
              placeholder="Username"
              onChange={this.update('username')}
              />
            <i className="far fa-user"></i>

          </div>

          <div className="input password">
            <input value={this.state.password}
              type="password"
              placeholder="Create a password"
              onChange={this.update('password')}
              />
            <i className="fas fa-lock"></i>

          </div>

          <div className="form-submit">
            <button>{this.props.formType}</button>
            <div className="form1">
              {this.formFooter()}
            </div>
          </div>

        </form>
        <div
          className="modal-screen js-modal-close"
          onClick={this.removeView}>
        </div>
      </div>
    );
  }
}

export default withRouter(Sessionform);
