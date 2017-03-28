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

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchPitches())
  }

  render() {
    console.log(this.props.mainPitch);

    return (
      <section>
        <Video video={this.props.mainPitch.video}/>
        <Divider hidden />
        <MainPitchInfo />
        <Divider hidden />
        <TrendingVideos />
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