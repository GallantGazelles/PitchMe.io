
//Log in functions
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
function signInError(error) {
  return {
    type: 'SIGN_IN_ERROR',
    error
  }
}
export function signIn() {
  return function(dispatch) {
    dispatch(checkSignIn())
    //axios call to check information
    //pass userId or username information from request.
    axios.get('http<FILL_IN_HERE>')
    .then(results => dispatch(completeSignIn(results.username, results.userId)))
    .catch(error => dispatch(signInError(error)))
  }
}

//Creating user functions
function creatingUser () {
  return {
    type: 'CREATING_USER'
  }
}
function creatingUserError(error) {
  return {
    type: 'CREATING_USER_ERROR',
    error
  }
})
export function createUser(userid, password) {
  return (dispatch) => {
    dispatch(creatingUser())
    axios.post()
    .then(data => dispatch(completeSignIn(data.username, data.userId)))
    .catch(error => dispatch(creatingUserError(error)))
  }
}

//Logging out function
export function logOut() {
  return {
    type: 'USER_LOGOUT'
  }
}