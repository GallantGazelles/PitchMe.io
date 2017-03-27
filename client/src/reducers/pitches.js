const initialState = {
  isFetching: false,
  mainPitch: {},
  pitches: [],
  error: null,
  index: 0
}

let vote_count = null;

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
        pitches: action.pitches,
        error: null
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
      if (state.mainPitch.votes === null) {
        vote_count = 0
      } else {
        vote_count = parseInt(state.mainPitch.votes)
      }
      return {
        ...state,
        mainPitch: {
          ...state.mainPitch,
          votes: state.mainPitch.vote_type === 1 ? vote_count - 1 : state.mainPitch.vote_type === -1 ? vote_count + 2: vote_count + 1,
          vote_type: state.mainPitch.vote_type === 1 ? 0 : 1
        }
      }
    case 'DOWNVOTE_TOGGLE':
      if (state.mainPitch.votes === null) {
        vote_count = 0
      } else {
        vote_count = parseInt(state.mainPitch.votes)
      }
      return {
        ...state,
        mainPitch: {
          ...state.mainPitch,
          votes: state.mainPitch.vote_type === -1 ? vote_count + 1 : state.mainPitch.vote_type === 1 ? vote_count - 2: vote_count - 1,
          vote_type: state.mainPitch.vote_type === -1 ? 0 : -1
        },
      }
    default:
      return state;
  }
};