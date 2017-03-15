import React from 'react';
import NavBar from './NavBar.jsx';
import Video from './Video.jsx';
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
        <Video />
        <Footer />
      </div>
    )
  }
}


export default App;