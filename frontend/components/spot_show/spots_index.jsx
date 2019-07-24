import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import SpotsHeader from './spots_header';
import LoadingIcon from './loading_icon';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetchSpots) {
      this.props.fetchSpots();
    }
    window.scrollTo(0, 0);
  }

  getDeleteButton(ownerId, spotId) {
    if (this.props.currentUser && this.props.currentUser.id === ownerId) {
      return (
        <button className="btn" onClick={() => this.props.deleteSpot(spotId)}>
          Delete Listing
        </button>
      );
    } else {
      return '';
    }
  }

  getEditButton(ownerId, spotId) {
    if (this.props.currentUser && this.props.currentUser.id === ownerId) {
      return (
        <button
          className="btn"
          onClick={() => this.props.openModal('edit_spot', spotId)}
        >
          Edit Listing
        </button>
      );
    } else {
      return '';
    }
  }

  render() {
    if (this.props.loading) {
      return <LoadingIcon />;
    }
    if (!this.props.spots) return <h1>Sorry, no spots were found!!</h1>;
    let users;
    if (this.props.users.users) {
      users = this.props.users.users;
    } else {
      users = this.props.users;
    }

    return (
      <div className="top-container">
        <div className="spots-container" id="scroll-homes">
          <h1>Homes around the U.S</h1>
          <ul>
            {this.props.spots.map((spot, idx) => {
              return (
                <li key={idx} className="spots-index-item">
                  <Link to={`/api/spots/${spot.id}`}>
                    <img src={spot.imgUrl} alt="spot" />
                  </Link>
                  <span className="host-img">
                    <img src={users[spot.ownerId].imgUrl} />
                  </span>
                  <span className="spot-location">{spot.location}</span>
                  <span className="spot-price">
                    ${spot.price} per night - Free cancellation
                  </span>
                  <div className="listing-buttons">
                    {this.getDeleteButton(spot.ownerId, spot.id)}
                    {this.getEditButton(spot.ownerId, spot.id)}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotsIndex);
