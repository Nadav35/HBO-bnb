import { RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS
} from '../actions/review_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW:
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default reviewErrorsReducer;
