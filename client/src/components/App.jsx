import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MainVideo from './MainVideo.jsx';
import Footer from './Footer.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import SignUp from './SignUp.jsx';
import Pitch from './Pitch.jsx';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitches: []
    }
  }

  componentDidMount() {
    // Get all pitches. Filter when they are returned.
    axios.get(`http://localhost:8080/api/pitches`)
         .then(response => console.log(response))
         .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        Pitchme.io
        <NavBar />
        <Pitch />
        <Footer />
      </div>
    )
  }
}