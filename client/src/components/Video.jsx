import React from 'react';
import { Container, Embed, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

//ask CR about how Embed works in semantic-ui and how we might want to parse the data we have in our db.
let Video = (props) => (
  <Container text>
    <Segment>
      <Embed
        active
        autoplay = {false}
        brandedUI = {false}
        color = 'white'
        hd = {true}
        id = 'D0WnZyxp_Wo'
        source = 'youtube'
      />
    </Segment>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    video: state.mainPitch.video
  }
}

export default Video;