function pitchFetching() {
  return {
    type: 'FETCHING_PITCH_PAGE'
  }
}
function pitchReceived(pitch) {
  return {
    type: 'PITCH_RECEIVED',
    pitch: pitch
  }
}
export function fetchPitch(url) {
  return (dispatch) => {
    dispatch(pitchFetching())
    //URL to get pitch
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(pitchReceived(results.data)))
  }
}