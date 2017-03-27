import { combineReducers } from 'redux';
import pitches from './pitches';
import createPitch from './createPitch';
import pitchPage from './pitch';
import user from './user';
import createUser from './createUser';
import signIn from './signIn';
import userPage from './userPage';
import comments from './comments';

const appReducer = combineReducers({
  pitches,
  pitchPage,
  createPitch,
  user,
  createUser,
  signIn,
  userPage,
  comments
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;