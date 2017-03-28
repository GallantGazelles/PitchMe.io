const initialState = {
  username: '',
  password: '',
  signingIn: false,
  successful: null,
  error: null
}

const signIn = (state=initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'SIGN_IN_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    case 'SIGNING_IN':
      return {
        ...state,
        signingIn: true
      }
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        error: action.error,
        signingIn: false
      }
    case 'SIGN_IN_SUCCESS':
      return {
        ...initialState,
        successful: true
      }
    default:
      return state;
  }
}

export default signIn;