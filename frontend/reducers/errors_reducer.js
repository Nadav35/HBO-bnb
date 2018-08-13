import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import spotErrorsReducer from './spot_errors_reducer';
import bookingErrorsReducer from './booking_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  spot: spotErrorsReducer,
  booking: bookingErrorsReducer,
  reviews: reviewErrorsReducer
});

export default errorsReducer;
