import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


export default (props) => (
  <Card centered color='red' label={{ as: 'a', color: 'blue', content: 'Tech', ribbon: true }}>
    <Image
      centered
      size='medium'
      label={{ as: 'a', color: 'blue', content: 'Tech', ribbon: true }}
      src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2'
      />
    <Card.Content>
      <Card.Header>Twitter for Cats</Card.Header>
      <Card.Meta>www.twitter.com</Card.Meta>
      <Card.Description>Cats love twitter, who doesn't?</Card.Description>
    </Card.Content>
    <Card.Content extra>
     <a>
       <Icon name='user' /> 75 Followers
     </a>
     <span className="right floated">
      1337 Votes
     </span>
    </Card.Content>
  </Card>
)