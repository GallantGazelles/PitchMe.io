import React from 'react';
import { Button, Container, Header, Icon, Item, Label, Segment, Statistic } from 'semantic-ui-react';

export default () => (
  <Container textAlign='center' text>
    <Item.Group>
      <Item>
        <Item.Content>
          <Header as="h1">Shift</Header>
          <Item.Description>
            <p>Switch between Gmail accounts like a boss.</p>
          </Item.Description>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content>
          <Item.Header as='h1'><Icon color='green' name='check' />1609 Votes</Item.Header>
          <Segment basic textAlign='center'>
            <Button icon size='big'><Icon name='arrow up' /></Button>
            <Button icon size='big'><Icon name='arrow down' /></Button>
          </Segment>
        </Item.Content>
      </Item>
    </Item.Group>
  </Container>
)
