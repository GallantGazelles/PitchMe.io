import React from 'react';
import { Container, Dimmer, Embed, Loader, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

//ask CR about how Embed works in semantic-ui and how we might want to parse the data we have in our db.
let Video = (props) => {
  if (props.video) {
    return (
      <Container text>
        <Segment>
          <Embed
            active
            url={props.video}
          />
        </Segment>
      </Container>
    )
  } else {
    return (
      <Container text>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
      </Container>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    video: state.mainPitch.video
  }
}

export default Video;