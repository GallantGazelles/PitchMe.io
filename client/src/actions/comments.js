import axios from 'axios';

const sendingComment = () => {
  return {
    type: 'SENDING_COMMENT'
  }
}
const sendingCommentError = (error) => {
  return {
    type: 'COMMENT_ERROR',
    error: error
  }
}
const commentSubmitted = () => {
  return {
    type: 'COMMENT_SUBMITTED'
  }
}
export const creatingComment = (userid, text) => {
  return (dispatch) => {
    dispatch(sendingComment())
    axios.post('http://localhost:8080/api/comments', { userid, text })
    .then( (results) => dispatch(commentSubmitted()) )
    .catch( (error) => dispatch(sendingCommentError(error)) )
  }
}

const fetchingComments = () => {
  return {
    type: 'FETCHING_COMMENTS'
  }
}
const receivedComments = (comments) => {
  return {
    type: 'RECEIVED_COMMENTS',
    comments
  }
}
const fetchingCommentsError = (error) => {
  return {
    type: 'FETCH_COMMENTS_ERROR',
    error
  }
}
export const fetchPitchComments = (pitchId) => {
  return (dispatch) => {
    dispatch(fetchingComments())
    axios.get('http://localhost:8080/api/comments', {
      params: { pitchId }
    })
    .then( results => { dispatch(receivedComments(results.data))})
    .catch( error => { dispatch(fetchingCommentsError(error))})
  }
}