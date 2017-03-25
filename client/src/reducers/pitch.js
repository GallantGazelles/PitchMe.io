const initialState = {
  vote: 0,
  pitch: {}
}

function pitch (state = initialState, action) {
  switch (action.type) {
    case 'UPVOTE':
      return {
        ...state,
        action.votes
      }
    default:
      return state;
  }
}

export default pitches; 