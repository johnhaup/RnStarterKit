/**
 * @format
 */

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Modals, ScreenParams } from '../../../navigation/types';
import { AModal } from '../AModal';

const navigation = {} as StackNavigationProp<ScreenParams, Modals>;
const route = {} as RouteProp<ScreenParams, Modals>;

it('renders correctly', () => {
  const snap = renderer.create(
    <AModal navigation={navigation} route={route} />,
  );
  expect(snap).toMatchSnapshot();
});
