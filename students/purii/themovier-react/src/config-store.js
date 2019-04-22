import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { save, load } from 'redux-localstorage-simple';

const NAMESPACE = 'ahli7fdha728gf782gh4fjs';

const localStorageMiddleware = save({ namespace: NAMESPACE });

export default function configureStore(preloadedState = load({ namespace: NAMESPACE })) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, logger, localStorageMiddleware)
  );
}
