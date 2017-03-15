import React from 'react';
import TrendingVideos from '../components/TrendingVideos.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <TrendingVideos />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});