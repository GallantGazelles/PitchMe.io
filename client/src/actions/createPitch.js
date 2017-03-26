function creatingPitch () {
  return {
    type: 'CREATING_PITCH'
  }
}
function pitchCreated(data) {
  return {
    type: 'PITCH_CREATED',
    pitch: data
  }
}
function pitchError(error) {
  return {
    type: 'PITCH_CREATED_ERROR',
    error
  }
}
export function createPitch(id, user_id, name, video, website, profile, blurb, category_id) {
  return (dispatch) => {
    dispatch(creatingPitch())
    axios.post()
    .then(data => dispatch(pitchCreated(data)))
    .catch(error => dispatch(pitchError(error)))
  }
}