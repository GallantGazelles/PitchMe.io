import React, { Component } from 'react';
import { upvote, downvote } from '../actions/pitch';
import { fetchPitch } from '../actions/pitchPage';
import { connect } from 'react-redux';
import axios from 'axios';
import Video from './Video.jsx';
import Discussion from './Discussion.jsx';
import {
  Button, Container, Dimmer, Divider, Grid, Header, Icon, Image, Item, Label, Loader, Segment, Statistic
} from 'semantic-ui-react';
import { fetchPitchComments, typingComment } from '../actions/comments';

class Pitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let { dispatch, getPitch, getComments } = this.props;
    let pitchId = this.props.match.params.pitchId;
    console.log('this pitchid', pitchId)
    getPitch(this.props.user, pitchId);
    getComments(pitchId);
  }

  componentWillReceiveProps(nextProps) {
    let { dispatch, getPitch } = this.props;
    let pitchId = this.props.match.params.pitchId;
    if (this.props.user !== nextProps.user) {
      getPitch(nextProps.user, pitchId);
      // axios.get('http://localhost:8080/api/pitch', {params: {pitchId: pitchId}})
      //   .then(results => {
      //     this.setState({pitch: results.data[0]});
      //   })
      //   .catch(error => console.log(error))

    }
  }

  render() {
    const {user, id, vote_type} = this.props
    const {onClickUpvote, onClickDownvote, onTypeChange } = this.props
    const upvoteButton = <Button icon size='big' color='green' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>
    const downvoteButton = <Button icon size='big' color='red' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>
    const neutralUpButton = (<Button icon basic size='big' color='grey' onClick={() => onClickUpvote(user, id, vote_type)}><Icon name='arrow up' /></Button>)
    const neutralDownButton = <Button icon basic size='big' color='grey' onClick={() => onClickDownvote(user, id, vote_type)}><Icon name='arrow down' /></Button>

    if (this.props.name) {
      return (
        <Segment basic>
          <Video video={this.props.video}/>
          <Container text>
            <Grid padded columns={2}>
              <Grid.Column width={6}>
                <Image centered bordered size='small' src='https://ph-files.imgix.net/8a2b7acf-d24d-46f3-9060-723db65625a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=120&h=120&fit=crop&dpr=2' />
                <Segment basic textAlign='center'>
                  <Item>
                    <Item.Content>
                      <Item.Header as='h2'>{this.props.votes} { this.props.votes === 1 ? 'Vote' : 'Votes' }</Item.Header>
                      { user ? (this.props.vote_type === 1 ? upvoteButton : neutralUpButton):<div></div> }
                      { user ? (this.props.vote_type === -1 ? downvoteButton : neutralDownButton):<div></div> }
                    </Item.Content>
                  </Item>
                </Segment>
              </Grid.Column>
              <Grid.Column width={10} >
                <Header as='h1'>
                  {this.props.name} <Label basic color='blue'>Tech</Label>
                  <Header.Subheader>
                    {this.props.blurb}
                  </Header.Subheader>
                </Header>
                <p>{this.props.profile}</p>
                <p>
                  <Button primary>Follow</Button>
                  <Button primary>Visit Website</Button>
                  <Button primary>Invest</Button>
                  <Button primary><Icon name='share' />  Share</Button>
                </p>
              </Grid.Column>
            </Grid>
          </Container>

          <Discussion comments={this.props.comments} />

        </Segment>
      )
    } else {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
          LOADING
        </Container>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.pitches.mainPitch,
    comments: state.comments.comments,
    user: state.user.userid,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickUpvote: (user, pitchid, vote) => { dispatch(upvote(user, pitchid, vote)) },
    onClickDownvote: (user, pitchid, vote) => { dispatch(downvote(user, pitchid, vote)) },
    getPitch: (pitchid, userid) => { dispatch(fetchPitch(pitchid, userid)) },
    getComments: (pitchid) => { dispatch(fetchPitchComments(pitchid)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pitch);


