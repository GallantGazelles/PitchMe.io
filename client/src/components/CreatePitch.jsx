import React, { Component } from 'react';
import {
  Button, Checkbox, Container, Divider, Form, Header, Icon, Input, Radio, Select, Segment, TextArea
} from 'semantic-ui-react';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = (e, { value }) => this.setState({ value });
  }

  render() {
    const categories = [
      { key: '1', value: 'tech', text: 'Tech' },
      { key: '2', value: 'games', text: 'Games' },
      { key: '3', value: 'books', text: 'Books' },
      { key: '4', value: 'iPhone', text: 'iPhone' },
      { key: '5', value: 'android', text: 'Android' },
      { key: '6', value: 'productivity', text: 'Productivity' }
    ];

    return (
      <Container>
        <Segment padded>
          <Segment basic clearing textAlign='center'>
            <Header as='h1'>Start Your Pitch!</Header>
          </Segment>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Company Name' />
              <Form.Field control={Input} label='Pitch Title' placeholder='140 characters' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} placeholder='60 seconds maximum' label='Video URL (Youtube/Vimeo)' />
              <Form.Field control={Input} label='Blurb' placeholder='140 characters' />
              <Form.Field control={Input} label='Website' placeholder='Your website' />
            </Form.Group>
            <Form.Field control={TextArea} label='Description' placeholder='Tell us more about your idea...' />
            <Form.Dropdown placeholder='Select Category' search selection options={categories} />
            <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Segment>
      </Container>
    )
  }
}