import React from 'react';
import NavBar from './NavBar.jsx';
import MainVideo from './MainVideo.jsx';
import Footer from './Footer.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import SignUp from './SignUp.jsx';
import Pitch from './Pitch.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/classes/videos`)
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


export default App;