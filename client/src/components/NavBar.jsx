import React, { Component } from 'react';
import LoggedInNav from './LoggedInNav.jsx';
import LoggedOutNav from './LoggedOutNav.jsx';
import { Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props);

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


export default connect(mapStateToProps)(NavBar);