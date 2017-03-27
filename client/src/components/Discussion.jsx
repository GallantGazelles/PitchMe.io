import React, { Component } from 'react';
import SingleComment from './SingleComment.jsx';
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { creatingComment } from '../actions/comments';

class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.comments);
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

export default Discussion;