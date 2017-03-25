import { combineReducers } from 'redux';
import pitches from './pitches';
import createPitch from './createPitch';

const appReducer = combineReducers({
  pitches,
  createPitch
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;