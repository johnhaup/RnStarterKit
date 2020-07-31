/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { CenteredView } from '../CenteredView';

it('renders correctly', () => {
  const snap = renderer.create(<CenteredView />);
  expect(snap).toMatchSnapshot();
});
