const initialState = {
  isFetching: false,
  mainPitch: {},
  pitches: [],
  error: null,
  index: 0,
  upvote: false,
  downvote: false
}

//upvote downvote logic needs to be determined from server
//NOTE: our mainPitch will need to have a way to account for votes.

export default function pitches (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PITCHES':
      return {
        ...state,
        isFetching: true
      };
    case 'SELECT_PITCH':
    //onClick function for pitches?
      let pitchIdArray = state.pitches.map(pitch => pitch.id);
      return {
        ...state,
        mainPitch: state.pitches.filter(pitch => pitch.id === action.pitchId),
        index: pitchIdArray.indexOf(action.pitchId)
      };
    case 'RECEIVE_PITCHES':
      return {
        ...state,
        isFetching: false,
        mainPitch: action.pitches[state.index],
        pitches: action.pitches
      };
    case 'NEXT_PITCH':
      let nextIndex = state.index + 1;
      return {
        ...state,
        mainPitch: state.pitches[nextIndex],
        index: nextIndex
      };
    case 'PREV_PITCH':
      let prevIndex = state.index - 1;
      return {
        ...state,
        mainPitch: state.pitches[prevIndex],
        index: prevIndex
      };
    case 'REQUEST_PITCHES_ERROR':
        return {
          ...state,
          error: action.error
        };
    case 'UPVOTE_TOGGLE':
      if (!state.upvote) {
        return {
          ...state,
          mainPitch: {
            ...state.mainPitch,
            votes: ...state.mainPitch.votes + 1
          },
          upvote: true,
          downvote: false
        }
      } else {
        return {
          ...state,
          mainPitch: {
            ...state.mainPitch,
            votes: ...state.mainPitch.votes - 1
          },
          upvote: false,
          downvote: false
        }
      }
    case 'DOWNVOTE_TOGGLE':
      if (!state.downvote) {
        return {
          ...state,
          mainPitch: {
            ...state.mainPitch,
            votes: ...state.mainPitch.votes - 1
          },
          upvote: false,
          downvote: true
        }
      } else {
        return {
          ...state,
          mainPitch: {
            ...state.mainPitch,
            votes: ...state.mainPitch.votes + 1
          },
          upvote: false,
          downvote: false
        }
      }
    default:
      return state;
  }
};