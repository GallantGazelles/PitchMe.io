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
    default:
      return state;
  }
}
export default pitchPage;