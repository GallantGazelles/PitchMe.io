import React from 'react';
import Video from './Video.jsx';
import { Container, Divider, Grid, Header, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react';

export default () => (
  <Segment basic>
    <Video />
    <Container text>
      <Segment basic padded>
        <Item>
          <Item.Image floated='left' size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />

          <Item.Content>
            <Item.Header as='h1'>Shift</Item.Header>
            <Item.Meta>
              <span className='blurb'>Switch between Gmail accounts like a boss.</span>
            </Item.Meta>
            <Item.Description>Navigate between Mail, Calendar and Drive easily, for all your accounts.</Item.Description>
            <Item.Extra>
              <Icon color='green' name='check' /> 1609 Votes
            </Item.Extra>
            <Item.Extra>
              <Label>Tech</Label>
              <Label>iPhone</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>

    </Container>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment' />
        Comments
      </Header>
    </Divider>
    <Divider hidden />

  </Segment>
)