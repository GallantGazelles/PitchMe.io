import axios from 'axios';

const requestPitches = (category) => {
  return {
    type: 'REQUEST_PITCHES',
    category
  }
}

const receivePitches = (json) => {
  return {
    type: 'RECEIVE_PITCHES',
    pitches: json.data
  }
}

export function fetchPitches(category = 'all') {
  return function(dispatch) {
    dispatch(requestPitches(category));
    //We can possibly define categories here? 
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(receivePitches(results)))
  }
}