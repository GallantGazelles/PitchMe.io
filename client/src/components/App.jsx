import React from 'react';
import NavBar from './NavBar.jsx';
import MainVideo from './MainVideo.jsx';
import Footer from './Footer.jsx';


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
        <Footer />
      </div>
    )
  }
}


export default App;