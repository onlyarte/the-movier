import { combineReducers } from 'redux';
import entities from './entities/index';
import user from './user';

export default combineReducers({
  entities,
  user,
});
