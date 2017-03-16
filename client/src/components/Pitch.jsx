import React from 'react';
import Video from './Video.jsx';
import PitchThumbnails from './PitchThumbnails';
import PitchLogo from './PitchLogo';

const Pitch = () => (
  <section>
    <Video />
    <PitchThumbnails />
    <div className="pitch-profile">
      <PitchLogo />
      <Votes />
      <VideoTitleBlurb />
      <StartupProfile />
      <PitchButtons />
    </div>
    <Discussion />
  </section>
)

export default Pitch;