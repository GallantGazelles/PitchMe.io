import React, { Component } from 'react';
import SingleComment from './SingleComment.jsx';
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { creatingComment, typingComment } from '../actions/comments';
import UserSingleComment from './UserSingleComment.jsx';

class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments, onTypeChange, submitComment } = this.props
    console.log(this.props);
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
          <Form reply onSubmit={ e => {
            if (this.props.text.length > 0) {
              submitComment(this.props.user, this.props.pitch, this.props.text)
            }
          }}>
            <Form.TextArea onChange={ (e) => { onTypeChange(e.target.value) }}/>
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.comments.text,
    user: state.user.userid,
    pitch: state.pitches.mainPitch.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTypeChange: (text) => { dispatch(typingComment(text)) },
    submitComment: (user, pitch, comment) => { dispatch(creatingComment(user, pitch, comment)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Discussion);