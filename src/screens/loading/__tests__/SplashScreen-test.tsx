/**
 * @format
 */

import { createStore, StoreProvider } from 'easy-peasy';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { storeModel } from '../../../store/models';
import { SplashScreen } from '../SplashScreen';

it('renders correctly', () => {
  const store = createStore(storeModel);
  const snap = renderer.create(
    <StoreProvider store={store}>
      <SplashScreen />
    </StoreProvider>,
  );
  expect(snap).toMatchSnapshot();
});
