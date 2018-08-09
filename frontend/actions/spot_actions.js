import * as ApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_BENCH_ERRORS';

const receiveSpot = spot => {
  return {
    type: RECEIVE_SPOT,
    spot
  };
};

const receiveSpots = spots => {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
};

export const fetchSpots = () => dispatch => {
  return ApiUtil.fetchSpots()
    .then(spots => dispatch(receiveSpots(spots)));
};
