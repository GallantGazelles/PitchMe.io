import React, { Component } from 'react';
import { Button, Checkbox, Container, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = (e, { value }) => this.setState({ value });
  }

  render() {
    return (
      <Container text>
        <Segment padded raised>
          <Segment basic clearing>
            <Header as='h1' floated='left'>Sign In</Header>
            <Header as='h5' floated='right'>New to PitchMe? Sign up here! <Icon name='write' /></Header>
          </Segment>
          <Form>
            <Form.Input label='Email' />
            <Form.Input label='Password' type='password' />
            <Form.Checkbox label='Remember Me' />
            <Form.Button basic primary>Sign In</Form.Button>
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
