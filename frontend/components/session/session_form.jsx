import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class Sessionform extends React.Component {
  constructor(props) {
    if (props.formType === 'Signup') {
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
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
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

  render() {
    return (
      <div>
        <h1> yeah baby!!</h1>
      </div>
    );
  }
}
