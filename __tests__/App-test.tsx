/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';
import App from '../src/App';

it('renders correctly', async () => {
  renderer.create(<App />);
  // https://stackoverflow.com/questions/61695139/async-testing-react-navigation-5-in-jest-navigationcontainer-causes-console-err
  await act(async () => {});
});
