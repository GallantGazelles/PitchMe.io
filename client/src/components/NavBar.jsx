import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

export default props => (
  <Grid padded>
    <Grid.Column>
      <Header as="h1">
        <Icon name='meh' />PitchMe
      </Header>
    </Grid.Column>
  </Grid>
)