import React from 'react'
import UserSingleFollow from './UserSinglePortfolio.jsx';
import { Comment, Header } from 'semantic-ui-react'

export default ({follow}) => (
  <Comment.Group>
    <Header as='h3' dividing>Following</Header>
    {follow.map( (pitch) => {
      return <UserSingleFollow
        name={pitch.name} 
        profile={pitch.profile}
        key={pitch.id} />
    })}
  </Comment.Group>
)