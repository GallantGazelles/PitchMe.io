import React, { Component } from 'react';
import Video from './Video.jsx';
import MainPitchInfo from './MainPitchInfo.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitches: []
    }
  }

  componentDidMount() {
    // Get all pitches. Filter when they are returned.
    axios.get('http://localhost:8080/api/pitches?q=all')
         .then(response => {
            console.dir(response.data);
            this.setState({ pitches: response.data });
         })
         .catch(error => console.error(error));
  }

  render() {
    return (
      <section>
        <Video />
        <Divider hidden />
        <MainPitchInfo />
        <Divider hidden />
        <TrendingVideos />
      </section>
    )
  }
}