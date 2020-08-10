import { combineReducers } from 'redux';
import allReducer from './allReducer';

export default combineReducers({
  reducer: allReducer
});