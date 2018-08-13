import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class BookingsShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(e, bookingId) {
    e.preventDefault();
    this.props.deleteBooking(bookingId)
      .then(this.props.history.push('/'));
  }




  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const {
      currentUser,
      bookings,
      spots,
      openModal } = this.props;
    return (
      <div className="main-bookings-container">
        <header className="welcome-header">
          <section className="greet-user">
            <h1>Hello there, {currentUser.username}</h1>
            <h2>These are your upcoming trips</h2>
          </section>
          <img src={currentUser.imgUrl} alt="user-photo"></img>
        </header>
        <section className="bookings-container">
          <ul>
            {bookings.map((booking, idx) => (
              <li key={idx} className="booking-box">
                <img src={spots[booking.spotId].imgUrl}></img>
                <h2>{spots[booking.spotId].title}</h2>
                <h3>{spots[booking.spotId].location}</h3>
                <span className="booking-dates">
                  <p className="date-info">{booking.startDate}</p>
                  <p>until</p>
                  <p className="date-info">{booking.endDate}</p>
                </span>
                <Link to={`/api/spots/${booking.spotId}`}>
                  <button>View Listing</button>
                </Link>
                <div className="booking-buttons">
                  <button
                    onClick={() => openModal('edit_booking', booking.id)}
                    className="btn">Edit Booking
                  </button>
                  <button onClick={(e) => this.handleDelete(e, booking.id)}
                    className="btn">Delete Booking
                  </button>

                </div>



              </li>

            ))}
          </ul>

        </section>
      </div>
    );
  }
}

export default BookingsShow;
