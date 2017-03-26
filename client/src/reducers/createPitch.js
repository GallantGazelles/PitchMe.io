const initialState = {
  creatingPitch: false,
  pitch: {},
  error: null
}

function createPitch(state=initialState, action) {
  switch (action.type) {
    case 'CREATING_PITCH':
      return {
        ...state,
        creatingPitch: true
      }
    case 'PITCH_CREATED':
      return {
        ...state,
        creatingPitch: false,
        pitch: action.pitch
      };
    case 'PITCH_CREATED_ERROR':
      return {
        ...state,
        creatingPitch: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default createPitch;