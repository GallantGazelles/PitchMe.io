import React from 'react'
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react'

export default () => (
  <Container text>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment' />
        Comments
      </Header>
    </Divider>
    <Divider hidden />

    <Comment.Group>
      <Comment>
        <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author>Ed Chan</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>
            <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there.</p>
            <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author>Craig Rodrigues</Comment.Author>
          <Comment.Metadata>
            <span>2 days ago</span>
            <div>Investment Banker</div>
            <div>
              <Icon name='star' />
              5 Favorites
            </div>
          </Comment.Metadata>
          <Comment.Text>I re-tweeted this.</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Form reply onSubmit={e => e.preventDefault()}>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  </Container>
)