import axios from 'axios';
import { completeSignIn, signInError } from './user';

export function signInUsername(username) {
  return {
    type: 'SIGN_IN_USERNAME',
    username
  }
}

export function signInPassword(password) {
  return {
    type: 'SIGN_IN_PASSWORD',
    password
  }
}

function signingIn() {
  return {
    type: 'SIGNING_IN'
  }
}

export function signIn(username, password) {
  return function(dispatch) {
    dispatch(signingIn())
    //axios call to check information
    //pass userId or username information from request.
    axios.post('http://localhost:8080/auth/signin', {username, password} )
    .then(results => dispatch(completeSignIn(results.username, results.user_id)))
    .catch(error => dispatch(signInError(error)))
  }
}