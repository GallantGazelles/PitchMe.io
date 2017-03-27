import React, { Component } from 'react';
import UserComments from './UserComments.jsx';
import { Container, Divider, Grid, Header, Image, Item, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchUserPage } from '../actions/userPage';
import UserPortfolio from './UserPortfolio.jsx';
import UserFollow from './UserFollow.jsx';
import { checkSession } from '../actions/user';

class userProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'comments' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchUserPage(this.props.userId));
  }
  componentWillReceiveProps(nextProps) {
    const {dispatch} = this.props;
    if (nextProps.userId !== this.props.userId) {
      console.log(nextProps.userId)
      dispatch(fetchUserPage(nextProps.userId))
    }
  }

  render() {
    const { activeItem } = this.state;
    const { username, userProfile, comments, follows, pitches } = this.props
    return (
      <Segment basic>
        <Container text textAlign='center'>
          <Segment color='red' padded='very' piled>
            <Item>
              <Item.Image size='small' shape='circular' src='http://react.semantic-ui.com/assets/images/wireframe/image.png' />
              <Divider hidden />
              <Item.Content>
                <Item.Header as='h2'>{username}</Item.Header>
                <Item.Meta>
                  <p><span className='occupation'>Software Developer</span> | <span className='location'>Atlanta, GA</span></p>
                </Item.Meta>
                <Divider hidden />
                <Item.Description><p>{userProfile}</p></Item.Description>
              </Item.Content>
            </Item>
          </Segment>
        </Container>

        <Segment basic textAlign='center'>
          <Menu compact pointing>
            <Menu.Item name='comments' active={activeItem === 'comments'} onClick={this.handleItemClick} />
            <Menu.Item name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
            <Menu.Item name='following' active={activeItem === 'following'} onClick={this.handleItemClick} />
          </Menu>
        </Segment>

        <Segment padded>
          { this.state.activeItem === 'comments' ? <UserComments comments={comments} /> : null }
          { this.state.activeItem === 'portfolio' ? <UserPortfolio portfolio={pitches} /> : null }
          { this.state.activeItem === 'following' ? <UserFollow follow={follows}/> : null}
        </Segment>

      </Segment>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.userPage,
    userId: state.user.userid
  }
}

export default connect(mapStateToProps)(userProfile)