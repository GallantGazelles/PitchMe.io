import React, { Component } from 'react';
import { upvote, downvote } from '../actions/pitch';
import { connect } from 'react-redux';
import { Button, Container, Header, Icon, Item, Label, Segment, Statistic } from 'semantic-ui-react';

class MainPitchInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote_type: 1
    }

    this.handleClick = (value) => this.setState({
      active: value
    })
  }

  render() {
    const upvoteButton = <Button icon size='big' color='green'><Icon name='arrow up' /></Button>
    const downvoteButton = <Button icon size='big' color='red'><Icon name='arrow down' /></Button>
    const neutralUpButton = <Button icon basic size='big' color='grey'><Icon name='arrow up' /></Button>
    const neutralDownButton = <Button icon basic size='big' color='grey'><Icon name='arrow down' /></Button>

    return (
      <Container textAlign='center' text>
        <Item.Group>
          <Item>
            <Item.Content>
              <Header as="h1">Shift</Header>
              <Item.Description>
                <p>Switch between Gmail accounts like a boss.</p>
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='h1'><Icon color='blue' name='thumbs outline up' />1609 Votes</Item.Header>
              <Segment basic textAlign='center'>
                { this.state.vote_type === 1 ? upvoteButton : neutralUpButton }
                { this.state.vote_type === -1 ? downvoteButton : neutralDownButton }
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
export default MainPitchInfo;
