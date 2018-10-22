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


      
  </div>
);

export default SpotsHeader;
