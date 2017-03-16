import React from 'react';
import Video from '../components/Video.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Video />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});