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

export const creatingComment = (userid, comment) => {
  return (dispatch) => {
    dispatch(sendingComment())
    axios.post('http://localhost:8080/api/comments')
    .then( (results) => dispatch(commentSubmitted()) )
    .catch( (error) => dispatch(sendingCommentError(error)) )
  }
}