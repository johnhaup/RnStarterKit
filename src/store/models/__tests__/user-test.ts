import { createStore } from 'easy-peasy';
import { userModel } from '../user';

test('set loading complete', async () => {
  const store = createStore(userModel);
  store.getActions().setOnboardingComplete(true);
  expect(store.getState().onboardingComplete).toEqual(true);
});

test('set auth', async () => {
  const store = createStore(userModel);
  const authResponse = {
    accessToken: '1234',
    refreshToken: '5678',
    idToken: 'abcd',
    tokenType: 'Bearer' as 'Bearer',
    expiresIn: 86400,
    scope: 'email and private information thanks Zuckerberg',
    fetchedAt: 157898,
  };

  store.getActions().setAuth(authResponse);
  expect(store.getState().auth).toEqual(authResponse);
});
