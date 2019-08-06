import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BookingFormContainer from './booking_form_container';
import BookingForm from './booking_form';
import ReviewFormContainer from '../review_form/review_form_container';
import ReviewShow from './review_show';
import { spotInfo } from '../../util/spot_util';

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
    window.scrollTo(0, 0);
  }

  getRating(avgRating) {
    let temp = [];
    for (let i = 0; i < avgRating; i++) {
      temp.push(i);
    }
    return (
      <ul>
        {temp.map(val => {
          return <li><i className="fas fa-star" /></li>;
        })}
      </ul>
    );
  }

  getLocationInfo(id, ownerId, price) {
    const obj = spotInfo(id, ownerId, price);
    return obj;
  }

  getErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  getDeleteButton(reviewId, reviewerId) {
    if (this.props.currentUser && this.props.currentUser.id === reviewerId) {
      return (
        <button
          className="btn delete-review-btn"
          onClick={() =>
            this.props
              .deleteReview(reviewId)
              .then(this.props.fetchSpot(this.props.match.params.spotId))
          }
        >
          Delete Review
        </button>
      );
    } else {
      return '';
    }
  }

  render() {
    if (!this.props.spot) return null;
    // const component = this.props.currentUser ?
    //   <BookingFormContainer
    //     /> : "";
    const component = <BookingFormContainer />;

    const host = this.props.users[this.props.spot.ownerId];
    // const reviewsCom = this.props.currentUser ? <ReviewFormContainer /> : '';
    const reviewsCom = <ReviewFormContainer />;

    const locationInfo = this.getLocationInfo(
      this.props.spot.id,
      this.props.spot.ownerId,
      this.props.spot.price
    );

    const rating = this.getRating(Object.keys(this.props.reviews).length);

    return (
      <div className="single-spot-show">
        <div className="single-spot-header">
          <a href={this.props.spot.imgUrl}>
            <img src={this.props.spot.imgUrl} alt="" />
          </a>
          <a href={this.props.spot.imgUrl}>
            <img src={this.props.spot.imgUrl} alt="" />
          </a>
          <a href={this.props.spot.imgUrl}>
            <img src={this.props.spot.imgUrl} alt="" />
          </a>
          <a href={this.props.spot.imgUrl}>
            <img src={this.props.spot.imgUrl} alt="" />
          </a>
          <a href={this.props.spot.imgUrl}>
            <img src={this.props.spot.imgUrl} alt="" />
          </a>
        </div>
        <div className="spot-container">
          <div>
            <div className="spot-title-img">
              <div className="location">
                <span className="spot-title">{this.props.spot.title}</span>
                <span className="city-name">{this.props.spot.location}</span>
              </div>
              <div className="spot-img">
                <img src={host.imgUrl} alt="profile-pic" />
                <span>{host.username}</span>
              </div>
            </div>
            <div className="place-details">
              <div className="place-type">
                <i class="fas fa-home"></i>
                <p>{locationInfo.homeType}</p>
              </div>
              <div className="place-accommodations">
                <p>{locationInfo.guests} guests</p>
                <p>{locationInfo.bedrooms} bedrooms</p>
                <p>{locationInfo.baths} baths</p>
              </div>
            </div>
            <div className="about-spot">
              <span>About This Spot</span>
              <p>{this.props.spot.description}</p>
            </div>
            <div className="amenities">
              <h1>Amenities</h1>
              <div className="amenity-list-item">
                <i class="fas fa-hot-tub"></i>
                <span>Jacuzzi</span>
              </div>
              <div className="amenity-list-item">
                <i class="fas fa-swimming-pool"></i>
                <span>Heated Swimming Pool</span>
              </div>
              <div className="amenity-list-item">
                <i class="fas fa-wifi"></i>
                <span>Wifi</span>
              </div>
              <div className="amenity-list-item">
                <i class="fas fa-tv"></i>
                <span>Cable TV</span>
              </div>
            </div>
            <div className="reviews-container">
              <div className="reviews-header">
                <h1>{Object.keys(this.props.reviews).length} Reviews</h1>
                {rating}
              </div>
              <div className="reviews-list">
                {this.props.reviews.map(review => {
                  return (
                    <ReviewShow
                      review={review}
                      key={review.id}
                      reviewer={this.props.users[review.reviewerId]}
                      avgRating={this.getRating(review.rating)}
                      deleteReview={this.getDeleteButton(
                        review.id,
                        review.reviewerId
                      )}
                    />
                  );
                })}
              </div>

            </div>
            {/* <div className="new-review-container"> */}
            {reviewsCom}
            {/* </div> */}
          </div>
          <div className="booking-form-container">{component}</div>
        </div>
        {/* <div className="main-container">
          <div className="container-spot-show">
            <div className="detail-container">
              <div className="spot-top">
                <h1>{this.props.spot.title}</h1>
              </div>
              <div className="user-profile">
                <h1>Your host</h1>
                <div className="stars" data-stars="1">
                  <svg
                    height="25"
                    width="23"
                    className="star_rating"
                    data-rating="1"
                  >
                    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                  </svg>
                </div>
                <img src={host.imgUrl} alt="profile-pic" />
                <h2>{host.username}</h2>
              </div>
            </div>
            <div className="home-highlights">
              <h3>HOME HIGHLIGHTS</h3>
              <p>{this.props.spot.description}</p>
            </div>
          </div>
          <div className="booking-form-container">{component}</div>
        </div>
        <div className="reviews-showpage">
          <h1>Reviews</h1>
          {this.props.reviews.map(review => {
            return (
              <ReviewShow
                review={review}
                key={review.id}
                reviewer={this.props.users[review.reviewerId]}
                avgRating={new Array(review.rating).fill(5)}
                deleteReview={this.getDeleteButton(
                  review.id,
                  review.reviewerId
                )}
              />
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default withRouter(SpotShow);
