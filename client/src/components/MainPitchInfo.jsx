import React, { Component } from 'react';
import { upvote, downvote } from '../actions/pitch';
import { connect } from 'react-redux';
import { Button, Container, Header, Icon, Item, Label, Segment, Statistic } from 'semantic-ui-react';

class MainPitchInfo extends Component {
  constructor(props) {
    super(props);

    this.handleClick = (value) => this.setState({
      active: value
    })
  }

  render() {
    const {user, id, vote_type} = this.props
    const {onClickUpvote, onClickDownvote} = this.props
    const upvoteButton = <Button icon size='big' color='green' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>
    const downvoteButton = <Button icon size='big' color='red' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>
    const neutralUpButton = (<Button icon basic size='big' color='grey' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>)
    const neutralDownButton = <Button icon basic size='big' color='grey' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>
    return (
      <Container textAlign='center' text>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header as="h1">{this.props.name}</Header>
              <Item.Description>
                <p>{this.props.profile}</p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='h1'><Icon color='blue' name='thumbs outline up' />{this.props.votes} Votes</Item.Header>
              <Segment basic textAlign='center'>
                { user !== null ? (this.props.vote_type === 1 ? upvoteButton : neutralUpButton):<div></div> }
                { user !== null ? (this.props.vote_type === -1 ? downvoteButton : neutralDownButton):<div></div> }
              </Segment>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.pitches.mainPitch,
    user: state.user.userid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickUpvote: (user, pitchid, vote) => { dispatch(upvote(user, pitchid, vote)) },
    onClickDownvote: (user, pitchid, vote) => { dispatch(downvote(user, pitchid, vote)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPitchInfo);
