import React from 'react';
import TrendingVideoCard from './TrendingVideoCard.jsx'
import { Card, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';


export default () => (
  <section>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='line chart' />
        Trending Pitches
      </Header>
    </Divider>
    <Divider hidden />

    <Grid container padded columns={3}>
      <Grid.Row>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
        <Grid.Column>
          <TrendingVideoCard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </section>
)