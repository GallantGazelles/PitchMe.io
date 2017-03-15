import React from 'react';
import Video from './Video.jsx';
import VideoTitleBlurb from './VideoTitleBlurb.jsx';

const TrendingVideos = () => (
  <section>
    <table>
      <tr>
        <td>
          <Video />
          <VideoTitleBlurb />
        </td>
        <td>
          <Video />
          <VideoTitleBlurb />
        </td>
      </tr>
      <tr>
        <td>
          <Video />
          <VideoTitleBlurb />
        </td>
        <td>
          <Video />
          <VideoTitleBlurb />
        </td>
      </tr>
    </table>
  </section>
)

export default TrendingVideos;