import React, { Component } from 'react';
import { upvote, downvote } from '../actions/pitch';
import { connect } from 'react-redux';
import Video from './Video.jsx';
import Discussion from './Discussion.jsx';
import { Button, Container, Divider, Grid, Header, Icon, Image, Item, Label, Segment, Statistic } from 'semantic-ui-react';

class Pitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {user, id, vote_type} = this.props
    const {onClickUpvote, onClickDownvote} = this.props
    const upvoteButton = <Button icon size='big' color='green' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>
    const downvoteButton = <Button icon size='big' color='red' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>
    const neutralUpButton = (<Button icon basic size='big' color='grey' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>)
    const neutralDownButton = <Button icon basic size='big' color='grey' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>

    return (
      <Segment basic>
        <Video />
        <Container text>
          <Grid padded columns={2}>
            <Grid.Column width={6}>
              <Image centered size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
              <Segment basic textAlign='center'>
                <Item>
                  <Item.Content>
                    <Item.Header as='h2'><Icon color='green' name='check' />1609 Votes</Item.Header>
                    { user !== null && user === undefined ? (this.props.vote_type === 1 ? upvoteButton : neutralUpButton):<div></div> }
                    { user !== null && user === undefined ? (this.props.vote_type === -1 ? downvoteButton : neutralDownButton):<div></div> }
                  </Item.Content>
                </Item>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as='h1'>
                Shift <Label>Tech</Label>
                <Header.Subheader>
                  Switch between Gmail accounts like a boss
                </Header.Subheader>
              </Header>
              <p>Spicy jalapeno bacon ipsum dolor amet jowl cow ribeye corned beef. Pastrami tongue meatloaf chuck, bresaola pig strip steak andouille corned beef kielbasa brisket.</p>
              <p>Spicy jalapeno bacon ipsum dolor amet jowl cow ribeye corned beef. Pastrami tongue meatloaf chuck, bresaola pig strip steak andouille corned beef kielbasa brisket.</p>
              <p>
                <Button primary>Follow</Button>
                <Button primary>Visit Website</Button>
                <Button primary>Invest</Button>
                <Button primary><Icon name='share' />  Share</Button>
              </p>
            </Grid.Column>
          </Grid>
        </Container>

        <Discussion />

      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.userid,
    pitch: state.pitches.mainPitch.id,
    vote_type: state.pitches.mainPitch.vote_type
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickUpvote: (user, pitchid, vote) => { dispatch(upvote(user, pitchid, vote)) },
    onClickDownvote: (user, pitchid, vote) => { dispatch(downvote(user, pitchid, vote)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pitch);


