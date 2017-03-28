import axios from 'axios';

function creatingPitch () {
  return {
    type: 'CREATING_PITCH'
  }
}

export function pitchName(name) {
  return {
    type: 'PITCH_NAME',
    name: name
  }
}

export function pitchVideo(video) {
  return {
    type: 'PITCH_VIDEO',
    video: video
  }
}

export function pitchWebsite(website) {
  return {
    type: 'PITCH_WEBSITE',
    website: website
  }
}

export function pitchProfile(profile) {
  return {
    type: 'PITCH_PROFILE',
    profile: profile
  }
}

export function pitchBlurb(blurb) {
  return {
    type: 'PITCH_BLURB',
    blurb: blurb
  }
}

export function pitchCategory(id) {
  return {
    type: 'PITCH_CATEGORY',
    id: id
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
export function createPitch(user_id, name, video, website, profile, blurb, category_id) {
  return (dispatch) => {
    dispatch(creatingPitch())
    axios.post('http://localhost:8080/api/pitches', {user_id, name, video, website, profile, blurb, category_id})
    .then(data => dispatch(pitchCreated(data)))
    .catch(error => dispatch(pitchError(error)))
  }
}