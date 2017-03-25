const initialState = {
  isFetching: false,
  mainPitch: {},
  pitches: [],
  error: null,
  index: 0
}

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
    //onClick function for pitches?
      let nextIndex = state.index + 1;
      return {
        ...state,
        mainPitch: state.pitches[nextIndex],
        index: nextIndex
      };
    case 'PREV_PITCH':
    //onClick function for pitches?
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
    default:
      return state;
  }
};