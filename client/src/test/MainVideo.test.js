import React from 'react';
import MainVideo from '../components/MainVideo.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MainVideo />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});