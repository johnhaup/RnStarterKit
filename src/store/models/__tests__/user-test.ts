import { createStore } from 'easy-peasy';
import { userModel } from '../user';

test('set loading complete', async () => {
  const store = createStore(userModel);
  store.getActions().setOnboardingComplete(true);
  expect(store.getState().onboardingComplete).toEqual(true);
});
