import React from 'react';
import Video from './Video.jsx';
import PitchThumbnails from './PitchThumbnails.jsx';
import PitchLogo from './PitchLogo.jsx';
import Votes from './Votes.jsx';
import VideoTitleBlurb from './VideoTitleBlurb.jsx';
import StartupProfile from './StartupProfile.jsx';
import PitchButtons from './PitchButtons.jsx';
import Discussion from './Discussion.jsx';

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