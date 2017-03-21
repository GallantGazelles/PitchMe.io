import React from 'react';
import SignIn from '../components/SignIn.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignIn />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});