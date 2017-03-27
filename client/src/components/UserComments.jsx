import React from 'react'
import UserSingleComment from './UserSingleComment.jsx';
import { Comment, Header } from 'semantic-ui-react'

export default ({comments}) => (
  <Comment.Group>
    <Header as='h3' dividing>Comments</Header>
    {comments.map( (comment) => {
      return <UserSingleComment 
        username={comment.username} 
        timestamp={comment.timestamp}
        comment = {comment.comment} />
    })}
  </Comment.Group>
)