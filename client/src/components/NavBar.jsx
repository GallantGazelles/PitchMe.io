import React, { Component } from 'react';
import { Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }


  render () {
    const { activeItem } = this.state;

    return (
      <Grid padded>
        <Grid.Column width={5}>
          <Header as="h1">
            <Icon name='meh' />PitchMe
          </Header>
        </Grid.Column>

        <Grid.Column width={11}>
          <Menu secondary>
            <Menu.Menu position='right'>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item name='how it works' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
              <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
              <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
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