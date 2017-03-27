import axios from 'axios';
import { completeSignIn, signInError } from './user';

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
    axios.get('http://localhost:8080/auth/signin')
    .then(results => dispatch(completeSignIn(results.data.username, results.data.user_id)))
    .catch(error => dispatch(signInError(error)))
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function selectPitch (pitchId) {
  return {
    type: 'SELECT_PITCH',
    pitchId
  }
}

export function nextPitch() {
  return {
    type: 'NEXT_PITCH'
  }
}

export function previousPitch() {
  return {
    type: 'PREV_PITCH'
  }
}

function upvoteToggle() {
  return {
    type: 'UPVOTE_TOGGLE'
  }
}
export function upvote(user_id, pitch_id, vote) {
  return function(dispatch) {
    dispatch(upvoteToggle())
    let vote_value = vote === 1 ? 0 : 1;
    console.log(vote_value)
    axios.put('http://localhost:8080/api/votes', { user_id, pitch_id, vote_value })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}

function downvoteToggle() {
  return {
    type: 'DOWNVOTE_TOGGLE'
  }
}
export function downvote(user_id, pitch_id, vote) {
  return function(dispatch) {
    dispatch(downvoteToggle())
    let vote_value = vote === - 1 ? 0 : -1;
    console.log(vote_value)
    axios.put('http://localhost:8080/api/votes', { user_id, pitch_id, vote_value })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}