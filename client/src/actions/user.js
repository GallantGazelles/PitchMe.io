function checkSignIn () {
  return {
    type: 'CHECK_SIGN_IN'
  }
}

function completeSignIn(username, userId) {
  return {
    type: 'SIGN_IN_COMPLETE',
    username,
    userId
  }
}

export function signIn() {
  return function(dispatch) {
    dispatch(checkSignIn())
    //axios call to check information
    //pass userId or username information from request.
    axios.get('http<FILL_IN_HERE>')
    .then(results => dispatch(completeSignIn(results.username, results.userId)))
  }
}

export function logOut() {
  return {
    type: 'USER_LOGOUT'
  }
}