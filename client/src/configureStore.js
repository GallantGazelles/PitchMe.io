import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middleware = applyMiddleware(thunkMiddleware, createLogger())

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    middleware
  )
}