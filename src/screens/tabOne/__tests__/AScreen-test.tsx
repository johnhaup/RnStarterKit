import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { ScreenParams, Screens } from '../../../navigation/types';
import { AScreen } from '../AScreen';

const navigation = {} as StackNavigationProp<ScreenParams, Screens.A_SCREEN>;
const route = {} as RouteProp<ScreenParams, Screens.A_SCREEN>;

it('renders correctly', () => {
  const snap = renderer.create(
    <AScreen navigation={navigation} route={route} />,
  );
  expect(snap).toMatchSnapshot();
});
