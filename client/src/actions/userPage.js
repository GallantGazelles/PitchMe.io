import axios from 'axios';

function fetchingUser () {
  return {
    type: 'FETCHING_USER'
  }
}

function receivedUserProfile(userProfile) {
  console.log(userProfile)
  return {
    type: 'RECEIVED_USER_PROFILE',
    username: userProfile[0].username,
    profile: userProfile[0].profile
  }
}

function receivedUserComments(comments) {
  return {
    type: 'RECEIVED_USER_PROFILE',
    comments: comments
  }
}

function receivedUserPitches(pitches) {
  return {
    type: 'RECEIVED_USER_PITCHES',
    pitches: pitches
  }
}

function receivedUserFollows(follows) {
  return {
    type: 'RECEIVED_USER_FOLLOWS',
    follows: follows
  }
}

export function fetchUserPage(userid) {
  return (dispatch) => {
    dispatch(fetchingUser())
    //Fetch user profile
    axios.get('http://localhost:8080/api/user', {
      params: {
        userId: userid
      }
    })
    .then( results => { dispatch(receivedUserProfile(results.data)) } )
    //Fetch comments
    axios.get('http://localhost:8080/api/comments', {
      params: {
        userId: userid
      }
    })
    .then( results => { dispatch(receivedUserComments(results.data)) } )
    //Fetch pitches
    axios.get('http://localhost:8080/api/pitches', {
      params: {
        q: 'user',
        userId: userid
      }
    })
    .then( results => { dispatch(receivedUserProfile(results.data)) } )
    //Fetch follows
    axios.get('http://localhost:8080/api/followers', {
      params: {
        userId: userid
      }
    })
    .then( results => { dispatch(receivedUserFollows(results.data)) } )
  }
}