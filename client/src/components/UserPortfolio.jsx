import React from 'react'
import UserSinglePortfolio from './UserSinglePortfolio.jsx';
import { Comment, Header } from 'semantic-ui-react'

export default ({portfolio}) => (
  <Comment.Group>
    <Header as='h3' dividing>Portfolio</Header>
    {portfolio.map( (pitch) => {
      return <UserSinglePortfolio
        name={pitch.name} 
        profile={pitch.profile} />
    })}
  </Comment.Group>
)