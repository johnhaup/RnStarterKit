import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { AModal } from '../../screens/modals/AModal';
import { measurements } from '../../styles';
import { Modals } from '../types';
import { TabNavigator } from './TabNavigator';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  const [appState, setAppState] = useState<AppStateStatus | undefined>(
    undefined,
  );

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appState === 'background' && nextAppState === 'active') {
      // Do something cool
    }
    setAppState(nextAppState);
  };

  return (
    <RootStack.Navigator
      mode="modal"
      headerMode={'none'}
      screenOptions={{ animationEnabled: false }}>
      <RootStack.Screen
        name={'TabNavigator'}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={Modals.A_MODAL}
        component={AModal}
        options={{
          animationEnabled: true,
          cardOverlayEnabled: true,
          cardStyle: {
            backgroundColor: 'rgba(0,0,0,0.1)',
            height: measurements.SCREEN_HEIGHT * 2,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingTop: measurements.SCREEN_HEIGHT,
          },
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              transform: [
                {
                  translateY: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [measurements.SCREEN_HEIGHT, 0],
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 0, 0.3],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
      />
    </RootStack.Navigator>
  );
};
