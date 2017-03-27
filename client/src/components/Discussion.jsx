import React, { Component } from 'react';
import SingleComment from './SingleComment.jsx';
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { creatingComment } from '../actions/comments';
import UserSingleComment from './UserSingleComment.jsx';

class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props
    console.log('comments', comments)
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
          {comments.map( (comment) => {
            return <UserSingleComment 
              username={comment.username} 
              timestamp={comment.timestamp}
              comment = {comment.comment} />
          })}
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

          // { if (comments.length > 0) {
          //     comments.map( (comment) => {
          //       return <SingleComment comment={ comment } />
          //     }) 
          //   }
          // }
          // { comments.map((comment)=> {
          //     return <SingleComment 
          //       username={comment.username}
          //       text={comment.comment}
          //       timestamp={comment.timestamp}
          //     />
          // })}