import React from 'react';
import { Card, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';

const TrendingVideos = () => (
  <section>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='line chart' />
        Trending Pitches
      </Header>
    </Divider>
    <Divider hidden />

    <Grid container padded column={3} columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card centered color='black'>
            <Image size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
            <Card.Content>
              <Card.Header>Startup 1</Card.Header>
              <Card.Meta>Twitter for Cats!</Card.Meta>
              <Card.Description>Cats love twitter, who doesn't?</Card.Description>
            </Card.Content>
            <Card.Content extra>
             <a>
               <Icon name='user' /> 75 Friends
             </a>
             <span className="right floated">
              Joined in 2013
             </span>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </section>
)

export default TrendingVideos;