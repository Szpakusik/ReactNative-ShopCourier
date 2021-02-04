import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  loginReducer,
  orderReducer,
});