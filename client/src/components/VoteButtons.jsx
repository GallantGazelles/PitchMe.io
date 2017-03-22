import React, { Component } from 'react'
import { Button, Segment } from 'semantic-ui-react'

export default class ButtonExampleToggle extends Component {
  constructor(props) {
    super(props);

    this.state ={};
    this.handleClick = () => this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state

    return (
      <Segment basic>
        <Button toggle active={active} onClick={this.handleClick}>
          Up
        </Button>
        <Button toggle active={active} onClick={this.handleClick}>
          Down
        </Button>
      </Segment>
    )
  }
}