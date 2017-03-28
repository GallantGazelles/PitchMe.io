import React from 'react';
import { Comment } from 'semantic-ui-react';

export default ({username, timestamp, comment}) => (
  <Comment>
    <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>{username}</Comment.Author>
      <Comment.Metadata>
        <div>{timestamp}</div>
      </Comment.Metadata>
      <Comment.Text>{comment}</Comment.Text>
    </Comment.Content>
  </Comment>
)