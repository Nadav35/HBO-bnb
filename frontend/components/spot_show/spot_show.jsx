import React from 'react';
import { Link, Route } from 'react-router-dom';

import SpotDetail from './spot_detail';
import { ProtectedRoute } from '../../util/route_util';
import BookingFormContainer from './booking_form_container';
import BookingForm from './booking_form';

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
  }

  render() {
    if (!this.props.spot || !this.props.host) return null; // put some loading magic

    const imgUser = this.props.host.imgUrl ?
      this.props.host.imgUrl : this.props.host.uploadedImgUrl;
    const imgSpot = this.props.spot.imgUrl ?
      this.props.spot.imgUrl : this.props.spot.uploadedImgUrl;

    return (
      <div className="single-spot-show">
        <div className="single-spot-header">
          <img src={imgSpot}></img>
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
                  src={imgUser} alt="profile-pic">
                </img>
                <h2>{this.props.host.username}</h2>
              </div>

            </div>
            <div className="home-highlights">
              <h3>HOME HIGHLIGHTS</h3>
              <p>{this.props.spot.description}</p>
            </div>
            <div className="spot-reviews">
              <h1>Reviews Coming Soon......</h1>

            </div>



          </div>
          <div className="booking-form-container">
            <BookingFormContainer />

          </div>
        </div>

      </div>
    );
  }
}

export default SpotShow;
