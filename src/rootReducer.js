import { combineReducers } from 'redux';
import itemReducer from './actions/item.js';
import authReducer from './actions/auth.js';

const rootReducer = combineReducers({
  itemReducer,
  authReducer
});

export default rootReducer;
