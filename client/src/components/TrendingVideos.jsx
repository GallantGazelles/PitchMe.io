import React from 'react';
import TrendingVideoCard from './TrendingVideoCard.jsx'
import { Card, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';


export default (props) => {
  if (props.pitches.length > 0) {
    return (
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
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[1]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[2]} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[3]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[4]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[5]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    )
  } else {
    return (
      <div>NOPE!</div>
    )
  }
}