import React, { Component } from 'react';
import LoggedInNav from './LoggedInNav.jsx';
import LoggedOutNav from './LoggedOutNav.jsx';
import { Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkSession } from '../actions/user';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const {dispatch, getUserInfo} = this.props;
    getUserInfo();
  }
  render () {
    if (this.props.username) {
      return <LoggedInNav />
    } else {
      return <LoggedOutNav />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => { dispatch(checkSession()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);