import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CScreen } from '../../screens/tabTwo/CScreen';
import { DScreen } from '../../screens/tabTwo/DScreen';
import { Screens } from '../types';

const { Navigator, Screen } = createStackNavigator();

export const TabTwoNavigator = () => (
  <Navigator initialRouteName={Screens.C_SCREEN}>
    <Screen name={Screens.C_SCREEN} component={CScreen} />
    <Screen name={Screens.D_SCREEN} component={DScreen} />
  </Navigator>
);
