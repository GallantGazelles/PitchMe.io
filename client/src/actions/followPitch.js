function pitchFollowToggleSuccessful() {
  return {
    type: 'TOGGLE_FOLLOW'
  }
}

function pitchFollowError(error) {
  type: 'FOLLOW_ERROR',
  error
}

export function followPitch(userid, pitchid) {
  return (dispatch) => {
    axios.({
      method: 'PUT'
    })
    .then( results => dispatch(pitchFollowToggleSuccessful())
    .catch( error => dispatch(pitchFollowError(error))
  }
}