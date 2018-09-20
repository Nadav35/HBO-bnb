import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers ({
  session: sessionReducer,
  errors: errorsReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
