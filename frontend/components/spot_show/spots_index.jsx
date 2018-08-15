import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
// import spotsDetail from './spot_detail';
import { openModal } from '../../actions/modal_actions';

class spotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
    window.scrollTo(0,0);
  }

  getDeleteButton(ownerId, spotId) {
    if (this.props.currentUser &&
      this.props.currentUser.id === ownerId) {
        return (
          <button className="btn"
            onClick={() => this.props.deleteSpot(spotId)
              .then(this.props.fetchSpots())}>
            Delete Listing
          </button>
        );
      } else {
        return "";
      }
  }

  getEditButton(ownerId, spotId) {
    if (this.props.currentUser &&
      this.props.currentUser.id === ownerId) {
        return (
          <button className="btn"
            onClick={() => this.props.openModal('edit_spot', spotId)}>
            Edit Listing
          </button>
        );
      } else {
        return "";
      }
  }

  render() {

    return (
        <div className="top-container">
          <header className="spots-header">

            <div className="photo left-photo">
              <img src={window.tv} />;
            </div>

            <div className="photo right-photo">
              <img src={window.vacation}></img>
            </div>
          </header>
          <div className="mid-trans">
            <div className="left-trans">
              <h1>Do you love TV shows?</h1>
              <h2>Do you also need a vaction?</h2>
            </div>
            <div className="right-trans">
              <h1>Welcome to HBO-BnB</h1>
              <h2>Vacation at your favorite HBO</h2><br/>
              <h2>shows locations</h2>
            </div>

          </div>

          <div className="spots-container">
            <h1>Book unique homes and experiences around the world</h1>
            <ul>
              {this.props.spots.map((spot, idx) => {
                return (
                  <li key={idx} className="spots-index-item">
                    <Link to={`/api/spots/${spot.id}`}>
                      <img src={spot.imgUrl} alt="spot" />
                    </Link>
                    <span className="host-img">
                      <img src={this.props.users[spot.ownerId].imgUrl}></img>
                    </span>
                    <span className="spot-location">{spot.location}</span>
                    <span className="spot-title">{spot.title}</span>
                    <span className="spot-price">${spot.price} per night</span>


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

export default withRouter(spotsIndex);
