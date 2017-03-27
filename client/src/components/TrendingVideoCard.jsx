import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


export default (props) => {
  console.log(props);

  return (
    <Card centered color='blue'>
      <Image
        size='medium'
        src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2'
        />
      <Card.Content>
        <Card.Header>{props.pitch.name}</Card.Header>
        <Card.Meta>{props.pitch.website}</Card.Meta>
        <Card.Description>{props.pitch.blurb}</Card.Description>
      </Card.Content>
      <Card.Content extra>
       <a>
         <Icon name='user' color='blue' /> {props.pitch.follow_count} Followers
       </a>
       <span className="right floated">
        {props.pitch.votes} Votes <Icon name='thumbs outline up' color='blue' />
       </span>
      </Card.Content>
    </Card>
  )
}