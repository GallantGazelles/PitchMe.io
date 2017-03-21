import React, { Component } from 'react';
import { Button, Checkbox, Container, Divider, Form, Header, Segment } from 'semantic-ui-react';

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
          <Header as='h2'>Sign In</Header>
          <Form>
            <Form.Input label='Email' />
            <Form.Input label='Password' type='password' />
            <Form.Checkbox label='Remember Me' />
            <Form.Button basic primary>Sign In</Form.Button>
          </Form>
          <Divider horizontal>
            <Header as='h4'>Or</Header>
          </Divider>

        </Segment>
      </Container>
    )
  }
}
