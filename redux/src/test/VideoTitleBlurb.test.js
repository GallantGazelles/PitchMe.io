import React from 'react';
import VideoTitleBlurb from '../components/VideoTitleBlurb.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <VideoTitleBlurb />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});