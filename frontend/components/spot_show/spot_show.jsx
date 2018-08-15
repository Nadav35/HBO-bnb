import React from 'react';
import { Link, Route } from 'react-router-dom';

import SpotDetail from './spot_detail';
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

  render() {

    if (!this.props.spot || !this.props.host) return null; // put some loading magic
    const component = this.props.currentUser ?
      <BookingFormContainer /> : "";

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
                  src={this.props.host.imgUrl} alt="profile-pic">
                </img>
                <h2>{this.props.host.username}</h2>
              </div>

            </div>
            <div className="home-highlights">
              <h3>HOME HIGHLIGHTS</h3>
              <p>{this.props.spot.description}</p>
            </div>
            <div className="reviews-showpage">
              <h1>Reviews</h1>
              {this.props.reviews.map((review) => {
                return (<ReviewShow
                  review={review}
                  key={review.id}
                  reviewer={this.props.users[review.reviewerId]}
                  avgRating={this.props.spot.averageRating}

                  />);
              })};


            </div>




          </div>
          <div className="booking-form-container">
            {component}

          </div>
        </div>
        <ReviewFormContainer />

      </div>
    );
  }
}

export default SpotShow;
