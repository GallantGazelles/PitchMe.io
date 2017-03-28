import axios from 'axios';
//Log in functions

export function completeSignIn(username, userid) {
  return {
    type: 'SIGN_IN_COMPLETE',
    username,
    userid
  }
}
export function signInError(error) {
  return {
    type: 'SIGN_IN_ERROR',
    error
  }
}
//Logging out function
export function logOut() {
  return {
    type: 'USER_LOGOUT'
  }
}

export function checkSession() {
  return (dispatch) => {
    axios.get('http://localhost:8080/auth/signin')
    .then(results => dispatch(completeSignIn(results.data.username, results.data.user_id)))
    .catch(error => dispatch(signInError(error)))
  }
}