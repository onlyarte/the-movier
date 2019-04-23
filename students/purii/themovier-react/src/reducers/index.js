import { combineReducers } from 'redux';
import entities from './entities/index';
import session from './session';
import ui from './ui';

export default combineReducers({
  entities,
  session,
  ui,
});
