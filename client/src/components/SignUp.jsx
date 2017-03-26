import React, { Component } from 'react';
import { Button, Checkbox, Container, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editUsername, editPassword, editProfile, editEmail, submitUser } from '../actions/createUser'

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container text>
        <Segment padded raised>
          <Segment basic clearing>
            <Header as='h1' floated='left'>Sign Up</Header>
            <Header as='h5' floated='right'>Already have an account? Sign in here</Header>
          </Segment>
          <Form>
            <Form.Input label='Name' />
            <Form.Input label='Email' />
            <Form.Input label='Re-Enter Email' />
            <Form.Input label='Password' type='password' />
            <Form.Input label='Re-Password' type='password' />
            <Form.Button basic primary>Sign Up!</Form.Button>
          </Form>
          <Divider horizontal>
            <Header as='h4'>Or</Header>
          </Divider>
          <Segment basic padded textAlign='center'>
            <Button color='facebook' size='huge'>
              <Icon name='facebook' /> Sign in with Facebook
            </Button>
          </Segment>
        </Segment>
      </Container>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    username: state.createUser.username,
    email: state.createUser.email,
    password: state.createUser.password,
    profile: state.createUser.profile
  }
}

export default SignUp;