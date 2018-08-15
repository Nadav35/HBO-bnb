import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditBookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: props.booking.startDate,
      end_date: props.booking.endDate,
      num_guests: props.booking.numGuests,
      id: props.booking.id,
      booker_id: props.booking.bookerId,
      spot_id: props.booking.spotId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount() {
    this.props.clearErrors();


  }

  handleSubmit(e) {
    e.preventDefault();
    
    const booking = merge({}, this.state);
    this.props.editBooking(booking)
      .then(this.props.closeModal);

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
    if (!this.props.booking) return null;
    return (
      <form className="edit-booking-form" onSubmit={this.handleSubmit}>
        <i className="fas fa-window-close"
          onClick={this.props.closeModal}>
        </i>
        {this.getErrors()}
        <h1>Edit your booking</h1>
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
          <button className="submit-button">edit</button>

        </div>

      </form>
    );
  }
}

export default withRouter(EditBookingForm);
