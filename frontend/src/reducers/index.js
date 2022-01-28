import { combineReducers } from 'redux';
import store from '../store';
import searchReducer from './searchReducer';
import shopReducer from './shopReducer';

export default combineReducers({
  products: searchReducer,
 // shopOwner : shopReducer
});
