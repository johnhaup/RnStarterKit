import { StoreProvider } from 'easy-peasy';
import React from 'react';
import { AppContainer } from './navigation/AppContainer';
import { store } from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  );
};

export default App;
