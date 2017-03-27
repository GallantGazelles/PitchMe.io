const initialState = {
  username: null,
  userProfile: null,
  comments: [],
  follows: [],
  pitches: [],
  fetchingUser: false
}

const userPage = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCHING_USER':
      return {
        ...state,
        fetchingUser: true
      };
    case 'RECEIVED_USER_PROFILE':
      return {
        ...state,
        username: action.username,
        userProfile: action.userProfile
      };
    case 'RECEIVED_USER_COMMENTS':
      return {
        ...state,
        comments: action.comments
      };
    case 'RECEIVED_USER_FOLLOWS':
      return {
        ...state,
        follows: action.follows 
      };
    case 'RECEIVED_USER_PITCHES':
      return {
        ...state,
        pitches: action.pitches
      }
    default: 
      return state;
  }
}

export default userPage;