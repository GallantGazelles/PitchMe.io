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
          <Comment.Author>Alison Zhang</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>
            <p>You have a typo on your pricing page. It says $19.99 per Year, should be Month :)</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            <Comment.Action>Edit</Comment.Action>
            <Comment.Action>Delete</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>

      <Comment>
        <Comment.Avatar src='http://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author>Ed Chan</Comment.Author>
          <Comment.Metadata>
            <span>2 days ago</span>
            <div>Investment Banker</div>
            <div>
              <Icon name='star' />
              5 Favorites
            </div>
          </Comment.Metadata>
          <Comment.Text>Ok, $19.99 a year isn't expensive, but Kiwi does the same as this for a one time fee that's less than half that. As I said before, yes, Shift looks a bit nicer, but what else is it bringing to the table to justify a subscription over a one-time purchase? </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
            <Comment.Action>Edit</Comment.Action>
            <Comment.Action>Delete</Comment.Action>
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