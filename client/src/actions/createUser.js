export function editUsername(username) {
  return {
    type: 'EDIT_USERNAME',
    username
  }
}

export function editPassword(password) {
  return {
    type: 'EDIT_PASSWORD',
    password
  }
}

export function editProfile(profile) {
  return {
    type: 'EDIT_PROFILE',
    password
  }
}

export function editEmail(email) {
  return {
    type: 'EDIT_EMAIL',
    email
  }
}


function creatingUser() {
  return {
    type: 'CREATING_USER'
  }
}
function creatingUserError(error) {
  return {
    type: 'CREATE_USER_ERROR',
    error
  }
}
function userSubmitted() {
  return {
    type: 'USER_SUBMITTED'
  }
}
export function submitUser(username, password, profile, email) {
  return (dispatch) => {
    dispatch(creatingUser())
    axios.post('http://localhost:8080/api/users',
      data: { username, password, email, profile })
    .then( results => dispatch(userSubmitted()))
    .catch( error => dispatch(creatingUserError(error)))
  }
}