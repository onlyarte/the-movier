import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { save, load } from 'redux-localstorage-simple';

const loggerMiddleware = createLogger();
const localStorageMiddleware = save();

export default function configureStore(preloadedState = load()) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware, localStorageMiddleware)
  );
}
