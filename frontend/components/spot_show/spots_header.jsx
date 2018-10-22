import React from 'react';

const SpotsHeader = () => (
  <div className="item-list">
    <div className="explore">
      <h1>Explore Airbnb</h1>
      <div className="explore-list">
        <ul>
          <li>
            <div className="pic homes-pic"></div>
            <span className="explore-text">Homes</span>
          </li>
          <li>
            <div className="pic experiences-pic"></div>
            <span className="explore-text">Experiences</span>
          </li>
          <li>
            <div className="pic restaurants-pic"></div>
            <span className="explore-text">Restaurants</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="airbnb-plus">
      <h1>Introducing Airbnb Plus</h1>
      <h4>A new selection of homes verified for quality & comfort</h4>
      <div className="plus-pic">
        <button>
          <span>EXPLORE HOMES ></span>
        </button>
      </div>
    </div>

    <div className="your-trip">
      <h1>Homes for your kind of trip</h1>
      <h4>Find a top-rated home with amenities you need</h4>
      <div className="trip-wrapper">
        <div className="trip-div fam">
          <div className="family-pic pic"></div>
          <span className="fam-brown">2,000+ HOMES</span>
          <div className="trip-body">
            <h4>Find a home that families love. Stretch out and
              enjoy a space of your own.
            </h4>
          </div>
        </div>
        <div className="trip-div work">
          <div className="work-pic pic"></div>
          <span className="work-blue">2,000+ HOMES</span>
          <div className="trip-body">
            <h4>Book a top-rated home that offers reservation
              flexibility and work-trip essentials.
            </h4>
          </div>
        </div>
      </div>
    </div>


      
  </div>
);

export default SpotsHeader;
