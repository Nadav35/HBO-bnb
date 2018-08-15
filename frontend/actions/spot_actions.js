import * as ApiUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const DELETE_SPOT = 'DELETE_SPOT';


const receiveSpot = payload => {
  return {
    type: RECEIVE_SPOT,
    payload
  };
};

const receiveSpots = payload => {
  return {
    type: RECEIVE_SPOTS,
    payload
  };
};

const receiveDeleteSpot = () => {
  return {
    type: DELETE_SPOT
  };
};

const receiveSpotErrors = errors => {
  return {
    type: RECEIVE_SPOT_ERRORS,
    errors
  };
};

export const fetchSpots = () => dispatch => {
  return ApiUtil.fetchSpots()
    .then(payload => dispatch(receiveSpots(payload)));
};

export const fetchSpot = id => dispatch => {
  return ApiUtil.fetchSpot(id)
    .then(spot => dispatch(receiveSpot(spot)));
};

export const editSpot = (spotId, spot) => dispatch => {
  return ApiUtil.editSpot(spotId, spot)
    .then(spot => dispatch(receiveSpot(spot)
  ), err => (
    dispatch(receiveSpotErrors(err.responseJSON))
  ));
};

export const createSpot = spot => dispatch => {
  return ApiUtil.createSpot(spot)
    .then(spot => dispatch(receiveSpot(spot)
  ), err => (
    dispatch(receiveSpotErrors(err.responseJSON))
  ));
};

export const deleteSpot = id => dispatch => {
  return ApiUtil.deleteSpot(id)
    .then(spot => dispatch(receiveDeleteSpot()));
};
