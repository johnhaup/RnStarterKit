import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tabs } from '../types';
import { TabOneNavigator } from './TabOneNavigator';
import { TabTwoNavigator } from './TabTwoNavigator';

const BottomTabNavigator = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name={Tabs.TAB_ONE}
        component={TabOneNavigator}
      />
      <BottomTabNavigator.Screen
        name={Tabs.TAB_TWO}
        component={TabTwoNavigator}
      />
    </BottomTabNavigator.Navigator>
  );
};
