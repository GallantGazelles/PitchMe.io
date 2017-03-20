import React from 'react';
import { Container, Header, Icon, Item, Label, Statistic } from 'semantic-ui-react';

export default () => (
  <Container text>
    <Item>
      <Item.Content>
        <Header as="h2">Shift</Header>
        <Item.Description>
          <p>Switch between Gmail accounts like a boss.</p>
          <p>Navigate between Mail, Calendar and Drive easily, for all your accounts.</p>
        </Item.Description>
        <Item.Extra>
          <Statistic>
            <Statistic.Value>
              <Icon name='arrow circle outline up' color='black' />
              <Icon name='arrow circle outline down' color='grey' />
              1602
            </Statistic.Value>
          </Statistic>
        </Item.Extra>
        <Item.Extra>
          <Label>Tech</Label>
          <Label>iPhone</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Container>
)