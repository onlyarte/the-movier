import { combineReducers } from 'redux';
import entities from './entities/index';
import session from './session';

export default combineReducers({
  entities,
  session,
});
