import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default (props) => (
  <List.Item>
    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/small/veronika.jpg' />
    <List.Content>
      <List.Header as='a'>Hack Reactor</List.Header>
      <List.Description>Don't just learn to code: think like a software engineer.</List.Description>
    </List.Content>
  </List.Item>
)