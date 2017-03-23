import React from 'react';
import { Comment } from 'semantic-ui-react';

export default (props) => (
  <Comment>
    <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
    <Comment.Content>
      <Comment.Author>Alison Zhang</Comment.Author>
      <Comment.Metadata>
        <span>Today at 5:42PM</span>
      </Comment.Metadata>
      <Comment.Text>
        <p>You have a typo on your pricing page. It says $19.99 per Year, should be Month :)</p>
      </Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
        <Comment.Action>Edit</Comment.Action>
        <Comment.Action>Delete</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
)