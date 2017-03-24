const initialState = {
  isFetching: false,
  mainPitch: {},
  list: []
}

function pitches (state = initialState, action) {

  switch (action.type) {
    case 'FETCH_PITCHES':
      return {
        ...state,
        isFetching: true
      }
    case 'SELECT_PITCH':
      return {
        ...state,
        mainPitch: action.select
      }
    case 'RECEIVE_PITCHES':
      return {
        ...state,
        isFetching: false,
        mainPitch: action.data[0],
        list: action.data
      }
    default:
      return state;
  }


}