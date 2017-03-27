import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default (props) => (
  <List.Item>
    <Image avatar src='http://react.semantic-ui.com/assets/images/avatar/small/veronika.jpg' />
    <List.Content>
      <List.Header>{props.name}</List.Header>
      <List.Description>{props.blurb}</List.Description>
    </List.Content>
  </List.Item>
)