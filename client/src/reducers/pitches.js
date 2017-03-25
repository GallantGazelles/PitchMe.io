const initialState = {
  isFetching: false,
  mainPitch: {},
  pitches: [],
  error: null
}

export default function pitches (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PITCHES':
      return {
        ...state,
        isFetching: true
      };
    case 'SELECT_PITCH':
    //onClick function for pitches?
      return {
        ...state,
        mainPitch: action.select
      };
    case 'RECEIVE_PITCHES':
      return {
        ...state,
        isFetching: false,
        mainPitch: action.pitches[0],
        pitches: action.pitches
      };
      case 'REQUEST_PITCHES_ERROR':
        return {
          ...state,
          error: action.error
        }
    default:
      return state;
  }
};