import React from 'react';
import { Link, Route } from 'react-router-dom';
// import spotsDetail from './spot_detail';

class spotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    return (
        <div className="top-container">
          <header className="spots-header">
            <h1>Travel the world with us</h1>
            <h2>A new selection of homes verified for quality & comfort</h2>
          </header>
          <div className="spots-container">
            <ul>
              {this.props.spots.map((spot, idx) => {
                return (
                  <li key={idx} className="spots_index_item">
                    <img src={spot.imgUrl} alt="spot" />
                    <span className="spot-location">{spot.location}</span>
                    <span className="spot-title">{spot.title}</span>
                    <span className="spot-price">${spot.price} per night</span>

                  </li>
                );
              })}
            </ul>


          </div>



        </div>
    );
  }
}

export default spotsIndex;
