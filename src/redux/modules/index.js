import { combineReducers } from 'redux';
import categories from './categories';
import fact from './fact';

export default combineReducers({
  categories,
  fact,
});
