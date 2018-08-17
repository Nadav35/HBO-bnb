import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 1,
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
    const spotId = parseInt(this.props.match.params.spotId);
    this.props.createReview(spotId, review)
      .then(this.setState( {
        rating: 1,
        description: ''
      })
    );
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

  onStarClick(nextValue, preValue, name) {
    this.setState({ rating: nextValue })
  }

  onStarHover(nextValue, preValue, name) {

  }

  onStarHoverOut(nextValue, preValue, name) {

  }

  renderStarIcon(nextValue, preValue, name) {

  }

  renderStarIconHalf(nextValue, preValue, name) {

  }

  render() {

    return (
      <div className="review-container">

        <h1>Add a Review</h1>
        <form className="review-form"
          onSubmit={this.handleSubmit}>
          {this.getErrors()}
          <div className="input review-rating">
            <label>
              Rating:
            </label>
            <StarRatingComponent
              onStarClick={this.onStarClick.bind(this)}
              value={this.state.rating}
              name="stars"
              onStarHover={this.onStarHover.bind(this)}
              onStarHoverOut={this.onStarHoverOut.bind(this)}
              renderStarIcon={(index, value) => {

              return (
                <span>
                  <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                </span>
              );

            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                  <span><i className="fas fa-star-half" /></span>
                </span>
              );

            }} />
          </div>
          <div className="input review-desc">
            <textarea
              placeholder="Explain yourself"
              cols="50"
              rows="10"
              value={this.state.description}
              onChange={this.update('description')}
            />
          </div>
          <div className="form-submit">
            <button className="submit-button">
            Send
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(ReviewForm);
