import React from 'react';
import SingleCompany from './SingleCompany.jsx';
import { Container, Header, List } from 'semantic-ui-react';

export default () => (
  <Container text>
    <Header as='h3' dividing>Companies</Header>
    <List animated>
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
      <SingleCompany />
    </List>
  </Container>
)
