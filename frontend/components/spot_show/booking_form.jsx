import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

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
    const booking = merge({}, this.state);
    const spotId = this.props.match.params.spotId;
    this.props.createBooking(spotId, booking);
  }



  getErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx ) => (
          <li key = {`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }



  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        {this.getErrors()}
        <h1>Book this place</h1>
        <div className="input start_date">
          <label>Check In Date</label>
          <input type="date"
            onChange={this.update('start_date')}
            value={this.state.start_date}
            name="booking_start_date"
            id="booking_start_date">
          </input>
        </div>

        <div className="input end">
          <label>Check Out Date</label>
          <input type="date"
            onChange={this.update('end_date')}
            value={this.state.end_date}
            name="booking_end_date"
            id="booking_end_date">
          </input>
        </div>
        <div className="input num-guests">
          <input type="text"
            placeholder="How Many guests?"
            value={this.state.num_guests}
            onChange={this.update('num_guests')}>

          </input>

        </div>
        <div className="form-submit">
          <button className="submit-button">Book It!!</button>

        </div>

      </form>
    );
  }
}

export default withRouter(BookingForm);
