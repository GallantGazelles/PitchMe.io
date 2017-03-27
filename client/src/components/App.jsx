import React, { Component } from 'react';
import Video from './Video.jsx';
import MainPitchInfo from './MainPitchInfo.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPitches } from '../actions/pitch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchPitches())
  }

  render() {
    return (
      <section>
        <Video />
        <Divider hidden />
        <MainPitchInfo />
        <Divider hidden />
        <TrendingVideos pitches={this.props.pitches} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pitches: state.pitches.pitches,
    mainPitch: state.pitches.mainPitch
  }
}


export default connect(mapStateToProps)(App);