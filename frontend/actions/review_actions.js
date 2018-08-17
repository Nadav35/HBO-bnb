import * as ApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

const receiveReview = payload => {
  return {
    type: RECEIVE_REVIEW,
    payload
  };
};

const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const receiveDeleteReview = () => {
  return {
    type: DELETE_REVIEW
  };
};

// export const createReview = (spotId, review) => {
//   return ApiUtil.createReview(spotId, review)
//     .then(review => dispatch(receiveReview(review)
//   ), err => (
//       dispatch(receiveReviewErrors(err.responseJSON))
//     ));
// };

export const createReview = (spotId, review) => dispatch => {
  return ApiUtil.createReview(spotId, review)
    .then(review => dispatch(receiveReview(review)
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};

export const editReview = review => dispatch => {
  return ApiUtil.editReview(review)
    .then(review => dispatch(receiveReview(review)
  ), err => (
    dispatch(receiveReviewErrors(err.responseJSON))
  ));
};

export const deleteReview = id => dispatch => {
  return ApiUtil.deleteReview(id)
    .then(() => dispatch(receiveDeleteReview()));
};
