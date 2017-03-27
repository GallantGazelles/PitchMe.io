import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectPitch } from '../actions/pitch'

const TrendingVideoCard = (props) => {
  const { dispatch } = props;
  return (
    <Card centered color='blue' onClick = { () => { dispatch(selectPitch(props.pitch.id)) } }>
      <Image
        href={`/pitch/${props.pitch.id}`}
        size='medium'
        src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2'
        />
      <Card.Content>
        <Card.Header href={`/pitch/${props.pitch.id}`} >{props.pitch.name}</Card.Header>
        <Card.Meta>{props.pitch.website}</Card.Meta>
        <Card.Description>{props.pitch.blurb}</Card.Description>
      </Card.Content>
      <Card.Content extra>
         <Icon name='user' color='blue' /> {props.pitch.follow_count} Followers
       <span className="right floated">
        {props.pitch.votes} <Icon name='thumbs outline up' color='blue' />
       </span>
      </Card.Content>
    </Card>
  )
}

export default connect()(TrendingVideoCard);