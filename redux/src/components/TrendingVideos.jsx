import React from 'react';
import Video from './Video.jsx';
import VideoTitleBlurb from './VideoTitleBlurb.jsx';

const TrendingVideos = () => (
  <section>
    <table>
      <tbody>
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
      </tbody>
    </table>
  </section>
)

export default TrendingVideos;