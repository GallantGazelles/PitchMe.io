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