const initialState = {
  userId: null,
  username: null,
  checkingInfo: false
}

export function user(state = initialState, action) {
  switch (action.type) {
    case: 'CHECK_SIGN_IN':
      return {
        ...state,
        checkingInfo: true
      };
    case: 'SIGN_IN_COMPLETE':
      return {
        ...state,
        username: action.username,
        userId: action.userId,
        checkingInfo: false
      }
    default: 
      return state;
  }
}