import React from 'react';

const ReviewShow = ({ avgRating, review, reviewer }) => {
  debugger
  return (
    <div className="review">
      <div className="reviewer-info">
        <img src={reviewer.imgUrl} alt="reviewer-pic"></img>
        <p>{reviewer.username}</p>
        <div className="rating">

            <i className="fas fa-star"></i>
        </div>
      </div>
      <div className="description">
        <p>{review.description}</p>

      </div>
    </div>
  );
};

export default ReviewShow;
