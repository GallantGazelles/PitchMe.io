import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'home' };

    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }


  render () {
    const { activeItem } = this.state;

    return (
      <div>
        <Divider hidden />
        <Divider />

        <Grid padded container columns='2'>

          <Grid.Column floated='left' verticalAlign='middle'>
            <Link to="/"><img src="../logo.jpg" alt="Smiley face" height="25" width="50" /></Link>
          </Grid.Column>

          <Grid.Column floated='right' verticalAlign='middle'>
            <Menu text>
              <Menu.Menu position='right'>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='how it works' active={activeItem === 'how it works'} onClick={this.handleItemClick} />
                <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
              </Menu.Menu>
            </Menu>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}