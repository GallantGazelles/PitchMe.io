import React from 'react';
import Video from './Video.jsx';
import { Container, Divider, Grid, Segment } from 'semantic-ui-react';

export default () => (
  <Segment basic>
    <Video />
    <Container text>
     <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>1</Segment>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)