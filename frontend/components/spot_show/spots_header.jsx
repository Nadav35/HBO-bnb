import React from 'react';

const SpotsHeader = () => (
  <div className="item-list">
    <div className="airbnb-plus">
      <h1>Introducing HBO-bnb Plus</h1>
      <h4>A new selection of homes verified for quality & comfort</h4>
      <div className="plus-pic">
        <button>
          <a href="#scroll-homes">EXPLORE HOMES ></a>
        </button>
      </div>
    </div>

    <div className="explore">
      <h1>Where to find me</h1>
      <div className="explore-list">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/nadav-noy">
              <i className="fab fa-linkedin" />
            </a>
            <span className="explore-text">LinkedIn</span>
          </li>
          <li>
            <a href="https://github.com/Nadav35">
              <i className="fab fa-github" />
            </a>
            <span className="explore-text">GitHub</span>
          </li>
          <li>
            <a href="https://angel.co/nadav-noy">
              <i className="fab fa-angellist" />
            </a>
            <span className="explore-text">AngelList</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="your-trip">
      <h1>Homes for your kind of trip</h1>
      <h4>Find a top-rated home with amenities you need</h4>
      <div className="trip-wrapper">
        <div className="trip-div fam">
          <div className="family-pic pic" />
          <span className="fam-brown">2,000+ HOMES</span>
          <div className="trip-body">
            <h4>
              Find a home that families love. Stretch out and enjoy a space of
              your own.
            </h4>
          </div>
        </div>
        <div className="trip-div work">
          <div className="work-pic pic" />
          <span className="work-blue">2,000+ HOMES</span>
          <div className="trip-body">
            <h4>
              Book a top-rated home that offers reservation flexibility and
              work-trip essentials.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpotsHeader;
