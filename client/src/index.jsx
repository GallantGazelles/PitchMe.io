import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './components/App.jsx';
import Companies from './components/CompaniesList.jsx';
import CreatePitch from './components/CreatePitch.jsx';
import Footer from './components/Footer.jsx';
import Pitch from './components/Pitch.jsx';
import NavBar from './components/NavBar.jsx';
import NotFound from './components/NotFound.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import UserProfile from './components/UserProfile.jsx';
import { Container, Divider } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

//will need to review react-redux-router relationship here...
const Index = () => (
  <Router>
    <Container>
      <NavBar />
      <Route exact path="/" component={ App }/>
      <Route path="/companies" component={ Companies }/>
      <Route path="/createpitch" component={ CreatePitch }/>
      <Route path="/pitch" component={ Pitch }/>
      <Route path="/signup" component={ SignUp }/>
      <Route path="/signin" component={ SignIn }/>
      <Route path="/notfound" component={ NotFound }/>
      <Route path="/user" component={ UserProfile }/>
      <Divider hidden />
      <Footer />
    </Container>
  </Router>
)

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app'))