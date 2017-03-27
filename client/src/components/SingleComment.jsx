import React from 'react';
import { Comment } from 'semantic-ui-react';

export default ({username, timestamp, comment}) => (
  <Comment>
    <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author>{username}</Comment.Author>
      <Comment.Metadata>
        <span>{timestamp}</span>
      </Comment.Metadata>
      <Comment.Text>
        <p>{comment}</p>
      </Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
        <Comment.Action>Edit</Comment.Action>
        <Comment.Action>Delete</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
)