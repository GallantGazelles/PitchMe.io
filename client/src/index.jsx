import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './components/App.jsx';
import Footer from './components/Footer.jsx';
import Pitch from './components/Pitch.jsx';
import NavBar from './components/NavBar.jsx';
import NotFound from './components/NotFound.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import { Container, Divider } from 'semantic-ui-react';

const Index = () => (
  <Router>
    <Container>
      <NavBar />
      <Route exact path="/" component={ App }/>
      <Route path="/pitch" component={ Pitch }/>
      <Route path="/signup" component={ SignUp }/>
      <Route path="/signin" component={ SignIn }/>
      <Route path="/notfound" component={ NotFound }/>
      <Divider hidden />
      <Footer />
    </Container>
  </Router>
)

ReactDOM.render(<Index />, document.getElementById('app'))