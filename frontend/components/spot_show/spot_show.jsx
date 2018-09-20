import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BookingFormContainer from './booking_form_container';
import BookingForm from './booking_form';
import ReviewFormContainer from '../review_form/review_form_container';
import ReviewShow from './review_show';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.spotId !== nextProps.match.params.spotId) {
      this.props.fetchSpot(nextProps.match.params.spotId);
    }
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
    window.scrollTo(0,0);
  }

  getRating(avgRating) {
    let rat = '';
    for (let i = 0; i < avgRating; i++) {
      rat += <i className="fas fa-star"></i>;
    }
    return rat;
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

  getDeleteButton(reviewId, reviewerId) {
    if (this.props.currentUser &&
      this.props.currentUser.id === reviewerId) {
        return (
          <button className="btn delete-review-btn"
            onClick={() => this.props.deleteReview(reviewId)
              .then(this.props.fetchSpot(this.props.match.params.spotId))}>
          Delete Review
          </button>
        );
      } else {
        return "";
      }
  }

  render() {
    if (!this.props.spot) return null; 
    const component = this.props.currentUser ?
      <BookingFormContainer
        /> : "";

    const host = this.props.users[this.props.spot.ownerId];
    const reviewsCom = this.props.currentUser ?
      <ReviewFormContainer /> : "";

    return (
      <div className="single-spot-show">
        <div className="single-spot-header">
          <img src={this.props.spot.imgUrl}></img>
        </div>
        <div className="main-container">
          <div className="container-spot-show">
            <div className="detail-container">
              <div className="spot-top">
                  <h1>{this.props.spot.title}</h1>
              </div>
              <div className="user-profile">
                <h1>Your host</h1>
                <img
                  src={host.imgUrl} alt="profile-pic">
                </img>
                <h2>{host.username}</h2>
              </div>
            </div>
            <div className="home-highlights">
              <h3>HOME HIGHLIGHTS</h3>
              <p>{this.props.spot.description}</p>
            </div>
          </div>
          <div className="booking-form-container">
            {component}
          </div>
        </div>
        <div className="reviews-showpage">
          <h1>Reviews</h1>
          {this.props.reviews.map((review) => {
            return (<ReviewShow
              review={review}
              key={review.id}
              reviewer={this.props.users[review.reviewerId]}
              avgRating={(new Array(review.rating)).fill(5)}
              deleteReview={this.getDeleteButton(review.id, review.reviewerId)}
              />);
          })}
        </div>
        {reviewsCom}
      </div>
    );
  }
}

export default withRouter(SpotShow);
