import { combineReducers } from 'redux';
import users from './users';
import lists from './lists';
import movies from './movies';

export default combineReducers({
  users,
  lists,
  movies,
});
