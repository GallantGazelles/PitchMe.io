const initialState = {
  username: '',
  password:'',
  email: '',
  profile: '',
  creatingUser: false,
  error: null
}

function createUser (state=initialState, action) {
  switch (action.type) {
    case 'CREATING_USER':
      return {
        ...state,
        creatingUser: true
      }
    case 'EDIT_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'EDIT_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    case 'EDIT_EMAIL':
      return {
        ...state,
        email: action.email
      }
    case 'EDIT_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'CREATE_USER_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'USER_SUBMITTED':
      return { ...initialState }
    default:
      return state;
  }
}

export default createUser;