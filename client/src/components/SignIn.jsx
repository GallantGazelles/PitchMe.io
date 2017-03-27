import React, { Component } from 'react';
import { Button, Checkbox, Container, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signInUsername, signInPassword, signIn } from '../actions/signIn';

class SignIn extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { dispatch, username, password, inputUsername, inputPassword, submitSignIn } = this.props;
    return (
      <Container text>
        <Segment padded raised>
          <Segment basic clearing>
            <Header as='h1' floated='left'>Sign In</Header>
            <Header as='h5' floated='right'>New to PitchMe? Sign up here! <Icon name='write' /></Header>
          </Segment>
          <Form onSubmit={ (e) => {
            e.preventDefault();
            submitSignIn(username, password);
          }}>
            <Form.Input label='Username' 
              onChange={(e) => { 
                inputUsername(e.target.value) } }
            />
            <Form.Input label='Password' type='password'
              onChange = { (e) => { inputPassword(e.target.value) } } 
            />
            <Form.Checkbox label='Remember Me' />
            <Form.Button basic primary 
              onClick={ (e) => {
                e.preventDefault();
                submitSignIn(username, password) 
              } }
            >
              Sign In
            </Form.Button>
          </Form>
          <Divider horizontal>
            <Header as='h4'>Or</Header>
          </Divider>
          <Segment basic textAlign='center'>
            <Button color='facebook' size='huge'>
              <Icon name='facebook' /> Sign in with Facebook
            </Button>
          </Segment>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.signIn.username,
    password: state.signIn.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputUsername: (username) => { dispatch(signInUsername(username)) },
    inputPassword: (password) => { dispatch(signInPassword(password)) },
    submitSignIn: (username, password) => { dispatch(signIn(username, password))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
