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
    case 'TOGGLE_FOLLOW':
      return {
        ...state,
        pitch: {
          ...state.pitch,
          follow: !state.pitch.follow
        }
      }
    default:
      return state;
  }
}
export default pitchPage;