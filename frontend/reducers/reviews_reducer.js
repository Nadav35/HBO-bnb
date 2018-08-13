import {
  RECEIVE_REVIEW,
  DELETE_REVIEW
} from '../actions/review_actions';
import { RECEIVE_SPOT } from '../actions/spot_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
      const newReview = { [action.payload.review.id]: action.payload.review };
      return merge({}, state, newReview);
    case DELETE_REVIEW:
      return {};
    case RECEIVE_SPOT:
      return merge({}, state, action.reviews);
    default:
      return state;
  }

};

export default reviewsReducer;
