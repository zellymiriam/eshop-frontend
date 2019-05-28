import { combineReducers } from 'redux';
import itemReducer from './actions/item.js';

const rootReducer = combineReducers({
  itemReducer,
});

export default rootReducer;
