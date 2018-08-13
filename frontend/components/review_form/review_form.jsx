import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    {/*const booking = merge({}, this.state);
    const spotId = this.props.match.params.spotId;
    this.props.createBooking(spotId, booking)
      .then(this.props.history.push('/'));*/}
    const review = merge({}, this.state);
    const spotId = this.props.match.params.spotId;
    this.props.createReview(spotId, review);
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
      <div className="review-container">
        <h1>Reviews baby!!</h1>
      </div>
    );
  }

}

export default ReviewForm;
