import React, { Component } from 'react';
import { Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class LoggedInNav extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid padded>
        <Grid.Column width={5} verticalAlign='middle'>
          <Header as="h1">
            <Link to="/"><img src="../logo.jpg" alt="Smiley face" height="50" width="100" /><p>PitchMe.io</p></Link>
          </Header>
        </Grid.Column>

        <Grid.Column width={11}>
          <Menu secondary compact floated='right'>
            <Menu.Menu position='right'>
              <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='how it works' as={Link} to='/howitworks' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
              <Menu.Item name='start a pitch' as={Link} to='/createpitch' active={activeItem === 'start a pitch'} onClick={this.handleItemClick} />
              <Menu.Item name='user' as={Link} to='/user' active={activeItem === 'user'} onClick={this.handleItemClick}>
                <Icon name='user circle outline' color='blue' size='large' /> {this.props.username}
              </Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}