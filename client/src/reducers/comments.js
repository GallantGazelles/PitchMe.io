const initialState = {
  comments: null,
  creatingComment: false,
  error: null
}

const comments = (state=initialState, action) => {
  switch (action.type) {
    case 'SENDING_COMMENT': 
      return {
        ...state,
        creatingComment: true
      };
    case 'COMMENT_SUBMITTED':
      return {
        ...initialState
      };
    case 'COMMENT_ERROR',
      return {
        ...state,
        error: action.error,
        creatingComment: false
      }
    default:
      return state;
  }
}

export default comments;