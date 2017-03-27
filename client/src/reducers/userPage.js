const initialState = {
  username: null,
  profile: null,
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
        username: username,
        profile: profile
      };
    case 'RECEIVED_USER_COMMENTS':
      return {
        ...state,
        comments: comments
      };
    case 'RECEIVED_USER_FOLLOWS':
      return {
        ...state,
        follows: follows 
      };
    case 'RECEIVED_USER_PITCHES':
      return {
        ...state,
        pitches: pitches
      }
    default: 
      return state;
  }
}

export default userPage;