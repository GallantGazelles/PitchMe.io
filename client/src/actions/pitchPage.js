import axios from 'axios';

function pitchFetching() {
  return {
    type: 'FETCHING_PITCH_PAGE'
  }
}
function pitchReceived(pitch) {
  return {
    type: 'PITCH_LOADED',
    pitch: pitch
  }
}
export function fetchPitch(userid=null, pitchid) {
  return (dispatch) => {
    dispatch(pitchFetching())
    //URL to get pitch
    axios.get('http://localhost:8080/api/pitch', {
      params: {
        userId: userid,
        pitchId: pitchid
      }
    })
    .then(results => dispatch(pitchReceived(results.data)))
  }
}