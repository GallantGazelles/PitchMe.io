import React from 'react'
import UserSingleComment from './UserSingleComment.jsx';
import { Comment, Header } from 'semantic-ui-react'

export default () => (
  <Comment.Group>
    <Header as='h3' dividing>Comments</Header>

    <UserSingleComment />
    <UserSingleComment />
    <UserSingleComment />
    <UserSingleComment />
  </Comment.Group>
)