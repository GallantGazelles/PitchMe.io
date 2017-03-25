const initialState = {

}

export function createPitch(state=initialState, action) {
  switch (action.type) {
    case 'CREATING_PITCH':
      return state;
    case 'PITCH_CREATED':
      return {
        ...state
      };
    case 'PITCH_CREATED_ERROR':
    default:
      return state;
  }
}