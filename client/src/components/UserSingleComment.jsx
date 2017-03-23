import React from 'react';
import { Comment } from 'semantic-ui-react';

export default (props) => (
  <Comment>
    <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
    <Comment.Content>
      <Comment.Author as='a'>Matt</Comment.Author>
      <Comment.Metadata>
        <div>Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text>How artistic!</Comment.Text>
    </Comment.Content>
  </Comment>
)