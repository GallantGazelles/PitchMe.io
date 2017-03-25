import React from 'react';
import Video from './Video.jsx';
import VideoTitleBlurb from './VideoTitleBlurb.jsx';

const MainVideo = () => (
  <section>
    <div>PREV</div>
    <div>
      <Video />
      <VideoTitleBlurb />
    </div>
    <div>NEXT</div>
  </section>
)

export default MainVideo;