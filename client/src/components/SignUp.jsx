import React, { Component } from 'react';
import { Button, Checkbox, Container, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editUsername, editPassword, editProfile, editEmail, submitUser } from '../actions/createUser'

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValidation: '',
      passwordValidation: ''
    }
  }

  handleValidation() {
    this.setState({value: event.target.value});
  }

  render() {
    //User info
    const {dispatch, username, email, password, profile} = this.props;
    //Dispatch functions
    const {changeUsername, changePassword, changeEmail,
      changeProfile, submitUser} = this.props;
    return (
      <Container text>
        <Segment padded raised>
          <Segment basic clearing>
            <Header as='h1' floated='left'>Sign Up</Header>
            <Header as='h5' floated='right'>Already have an account? Sign in here</Header>
          </Segment>
          <Form onSubmit={()=> {dispatch(submitUser(username, password, profile, email))}}>
            <Form.Input label='Name' onChange={(e)=>{changeUsername(e.target.value)}} />
            <Form.Input label='Email' onChange={(e)=>{changeEmail(e.target.value)}} />
            <Form.Input label='Re-Enter Email' />
            <Form.Input label='Password' type='password' onChange={(e)=>{changePassword(e.target.value)}} />
            <Form.Input label='Re-Password' type='password' />
            <Form.Button primary>Sign Up!</Form.Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (username) => {dispatch(editUsername(username))},
    changePassword: (password) => {dispatch(editPassword(password))},
    changeEmail: (email) => {dispatch(editEmail(email))},
    changeProfile: (profile) => {dispatch(editProfile(profile))},
    submitUser: (username, pw, profile, email) => {
      dispatch(submitUser(username, pw, profile, email))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(SignUp);

