import { combineReducers } from 'redux';

import filtersReducer from './filters_reducer';
import modalReducer from './modal_reducer';

export default combineReducers ({
  filters: filtersReducer,
  modal: modalReducer,

});
