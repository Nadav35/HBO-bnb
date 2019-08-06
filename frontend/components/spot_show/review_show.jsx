import React from 'react';

const ReviewShow = ({ avgRating, review, reviewer,
  deleteReview }) => {

  return (
    <div className="review-list-item">
      <div className="review-top">
        <img src={reviewer.imgUrl} alt="reviewer-pic"></img>
        <span>{reviewer.username}</span>
        {avgRating}
      </div>
      <div className="review-bottom">
        <p>{review.description}</p>
      </div>

    </div>
    // <div className="review">
    //   <div className="reviewer-info">

    //       <img src={reviewer.imgUrl} alt="reviewer-pic"></img>
    //       <p>{reviewer.username}</p>
    //       <div className="rating">
    //           {avgRating.map((el, key) => (
    //             <span key={key}>
    //               <i className="fas fa-star"></i>
    //             </span>
    //           ))}
    //       </div>


    //   </div>
    //   <div className="description">
    //     <p>{review.description}</p>
    //     {deleteReview}
    //   </div>
    // </div>
  );
};

export default ReviewShow;
