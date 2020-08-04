import { StoreProvider } from 'easy-peasy';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContainer } from './navigation/AppContainer';
import { store } from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;

/*

TODO:
Auth0 login
ErrorBoundary
Sentry
Animated widgets
fastlane
apollo / axios

*/
