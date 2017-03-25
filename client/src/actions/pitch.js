import axios from 'axios';

const requestPitches = () => {
  return {
    type: 'REQUEST_PITCHES',
  }
}

const receivePitches = (json) => {
  return {
    type: 'RECEIVE_PITCHES',
    pitches: json.data
  }
}

const errorPitches = (err) => {
  return {
    type: 'REQUEST_PITCHES_ERROR',
    error: err
  }
}
export function fetchPitches(category = 'all') {
  return function(dispatch) {
    dispatch(requestPitches());
    //We can possibly define categories here? 
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export const selectPitch = (pitchId) => {
  return {
    type: 'SELECT_PITCH',
    pitchId
  }
}