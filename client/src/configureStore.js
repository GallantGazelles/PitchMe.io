import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from './reducers/rootReducers';

const middleware = applyMiddleware(thunkMiddleware, createLogger())

export default function configureStore(preloadedState) {
  return createStore(
    rootReducers,
    preloadedState,
    middleware
  )
}