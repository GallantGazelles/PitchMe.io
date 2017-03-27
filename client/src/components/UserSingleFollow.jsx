import React from 'react';
import { Comment } from 'semantic-ui-react';

export default ({name, profile}) => (
  <Comment>
    <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>{name}</Comment.Author>
      <Comment.Text>{profile}</Comment.Text>
    </Comment.Content>
  </Comment>
)