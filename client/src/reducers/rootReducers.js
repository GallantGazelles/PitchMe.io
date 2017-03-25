import { combineReducers } from 'redux';
import pitches from './pitches';

const appReducer = combineReducers({
  pitches
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;