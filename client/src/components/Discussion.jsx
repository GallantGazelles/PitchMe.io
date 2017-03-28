import React, { Component } from 'react';
import SingleComment from './SingleComment.jsx';
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

export default class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container text>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='comment' />
            Comments
          </Header>
        </Divider>
        <Divider hidden />

        <Comment.Group>
          <SingleComment />
          <SingleComment />
          <SingleComment />

          <Form reply onSubmit={e => e.preventDefault()}>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </Container>
    )
  }
}
