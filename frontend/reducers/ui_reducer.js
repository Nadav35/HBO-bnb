import { combineReducers } from 'redux';

import filtersReducer from './filters_reducer';
import modalReducer from './modal_reducer';
import loadingReducer from './loading_reducer';

export default combineReducers ({
  filters: filtersReducer,
  payload: modalReducer,
  loading: loadingReducer

});
