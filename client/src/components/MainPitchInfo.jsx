import React, { Component } from 'react';
import { upvote, downvote } from '../actions/pitch';
import { connect } from 'react-redux';
import { Button, Container, Header, Icon, Item, Label, Segment, Statistic } from 'semantic-ui-react';

class MainPitchInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote_type: -1
    }

    this.handleClick = (value) => this.setState({
      active: value
    })
  }

  render() {
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
              <Item.Header as='h1'><Icon color='green' name='check' />1609 Votes</Item.Header>
              <Segment basic textAlign='center'>
                <Button icon size='big' color={this.state.vote_type === 1 ? 'green' : 'blue'} >
                  <Icon name='arrow up' />
                </Button>
                <Button icon size='big' color={this.state.vote_type === -1 ? 'red' : 'blue'}>
                  <Icon name='arrow down' />
                </Button>
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
