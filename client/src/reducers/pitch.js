const initialState = {
  pitch: {},
  isFetchingPitch: false
}

function pitchPage (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_PITCH_PAGE':
      return {
        ...state,
        isFetchingPitch: true
      }
    case 'PITCH_RECEIVED':
      return {
        ...state,
        pitch: action.pitch,
        isFetchingPitch: false
      }
    default:
      return state;
  }
}
export default pitches;