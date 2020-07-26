import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AScreen } from '../../screens/tabOne/AScreen';
import { BScreen } from '../../screens/tabOne/BScreen';
import { Screens } from '../types';

const { Navigator, Screen } = createStackNavigator();

export const TabOneNavigator = () => (
  <Navigator initialRouteName={Screens.A_SCREEN}>
    <Screen name={Screens.A_SCREEN} component={AScreen} />
    <Screen name={Screens.B_SCREEN} component={BScreen} />
  </Navigator>
);
