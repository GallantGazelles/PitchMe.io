import React from 'react';
import SignUp from '../components/SignUp.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignUp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});