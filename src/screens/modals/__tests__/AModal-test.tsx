import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStore, StoreProvider } from 'easy-peasy';
import React from 'react';
import 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Modals, ScreenParams } from '../../../navigation/types';
import { storeModel } from '../../../store/models';
import { AModal } from '../AModal';

const navigation = {} as StackNavigationProp<ScreenParams, Modals>;
const route = {} as RouteProp<ScreenParams, Modals>;

it('renders correctly', () => {
  const store = createStore(storeModel);
  const snap = renderer.create(
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <AModal navigation={navigation} route={route} />
      </SafeAreaProvider>
    </StoreProvider>,
  );
  expect(snap).toMatchSnapshot();
});
