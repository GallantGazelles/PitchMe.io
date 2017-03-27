import React, { Component } from 'react';
import { Grid, Header, Icon, Image, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class LoggedOutNav extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid padded>
        <Grid.Column width={3} verticalAlign='middle'>
            <Header as="h1" textAlign='center'>
            <Link to="/"><img src="../logo.jpg" alt="PitchMe.io" height="50" width="100" /><p>PitchMe.io</p></Link>
          </Header>
        </Grid.Column>

        <Grid.Column width={13}>
          <Menu secondary>
            <Menu.Menu position='right'>
              <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='how it works' as={Link} to='/howitworks' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
              <Menu.Item name='sign up' as={Link} to='/signup' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
              <Menu.Item name='sign in' as={Link} to='/signin' active={activeItem === 'sign in'} onClick={this.handleItemClick} />
              <Menu.Item>
                <Input icon='search' placeholder='Search' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}