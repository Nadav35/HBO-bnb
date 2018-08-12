import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    debugger

    this.state = {
      start_date: '',
      end_date: '',
      num_guests: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <h1>Yeah Babe</h1>
    );
  }
}

export default BookingForm;
