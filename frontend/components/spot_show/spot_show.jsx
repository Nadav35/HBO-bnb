import React from 'react';
import { Link, Route } from 'react-router-dom';

import SpotDetail from './spot_detail';
import { ProtectedRoute } from '../../util/route_util';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {

    if (!this.props.spot) return null; // put some loading magic
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
            <div className="spot-reviews">
              <h1>Reviews Coming Soon......</h1>

            </div>



          </div>
          <div className="booking-form-container">
            <h1>Bookings coming soon</h1>

          </div>
        </div>

      </div>
    );
  }
}

export default SpotShow;
