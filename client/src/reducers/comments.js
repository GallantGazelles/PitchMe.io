const initialState = {
  text: null,
  comments: [],
  creatingComment: false,
  error: null,
  fetchingComments: false,
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
    case 'COMMENT_ERROR':
      return {
        ...state,
        error: action.error,
        creatingComment: false
      };
    case 'FETCHING_COMMENTS':
      return {
        ...state,
        fetchingComments: true
      }
    case 'FETCH_COMMENTS_ERROR':
      return {
        ...state,
        error: action.error,
        fetchingComments: true
      }
    case 'RECEIVED_COMMENTS':
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state;
  }
}

export default comments;