import {
  NavigationContainer,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import React, { useRef } from 'react';
import { SplashScreen } from '../screens/loading/SplashScreen';
import { useTypedStoreState } from '../store/hooks';
import { RootNavigator } from './navigators/RootNavigator';

// Gets the current screen from navigation state
const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState>,
): string => {
  const route = state.index ? state.routes[state.index] : null;

  if (route?.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route?.name || 'No route name';
};

export const AppContainer = () => {
  const routeNameRef = useRef<string>('');
  const loadingComplete = useTypedStoreState((s) => s.session.loadingComplete);

  const onStateChange = (state: NavigationState | undefined) => {
    if (!state) {
      return;
    }
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // Nav state can change without changing a route
      // Only log when screen changes
      // DO SOMETHING WITH CURRENT ROUTE NAME
    }

    routeNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer onStateChange={onStateChange}>
      {loadingComplete ? <RootNavigator /> : <SplashScreen />}
    </NavigationContainer>
  );
};
