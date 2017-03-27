import React, { Component } from 'react';
import SingleCompany from './SingleCompany.jsx';
import { Container, Header, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPitches } from '../actions/pitch';

class CompaniesList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchPitches())
  }

  render() {
    console.log('alksfaslkdjf', this.props);

    if (this.props.pitches.length > 0) {
      return (
        <Container text>
          <Header as='h3' dividing>Pitches</Header>
          <List animated>
            { this.props.pitches.map(pitch => <SingleCompany name={pitch.name} blurb={pitch.blurb} />) }
          </List>
        </Container>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    pitches: state.pitches.pitches
  }
}

export default connect(mapStateToProps)(CompaniesList);