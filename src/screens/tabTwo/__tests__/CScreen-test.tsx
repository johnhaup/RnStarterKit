import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { ScreenParams, Screens } from '../../../navigation/types';
import { CScreen } from '../CScreen';

const navigation = {} as StackNavigationProp<ScreenParams, Screens.C_SCREEN>;
const route = {} as RouteProp<ScreenParams, Screens.C_SCREEN>;

it('renders correctly', () => {
  const snap = renderer.create(
    <CScreen navigation={navigation} route={route} />,
  );
  expect(snap).toMatchSnapshot();
});
