import React from 'react';
import NavBar from './NavBar.jsx';
import MainVideo from './MainVideo.jsx';
import Footer from './Footer.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import SignUp from './SignUp.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Pitchme.io
        <NavBar />
        <MainVideo />
        <TrendingVideos />
        <Footer />
      </div>
    )
  }
}


export default App;