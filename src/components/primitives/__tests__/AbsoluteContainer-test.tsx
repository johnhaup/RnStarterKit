/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { AbsoluteContainer } from '../AbsoluteContainer';

it('renders correctly', () => {
  const snap = renderer.create(<AbsoluteContainer />);
  expect(snap).toMatchSnapshot();
});
