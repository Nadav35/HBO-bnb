import {
  RECEIVE_SPOT,
  RECEIVE_SPOTS,
  RECEIVE_SPOT_ERRORS,
  DELETE_SPOT,
  START_LOADING_ALL_SPOTS
} from '../actions/spot_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';
import merge from 'lodash/merge';

const initialState = false;

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SPOTS:
    case RECEIVE_BOOKINGS:

      return false;
    case START_LOADING_ALL_SPOTS:
      return true;


    default:
      return initialState;
  }


};

export default loadingReducer;
