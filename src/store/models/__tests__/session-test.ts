import { createStore } from 'easy-peasy';
import { sessionModel } from '../session';

test('set loading complete', async () => {
  const store = createStore(sessionModel);
  store.getActions().setLoadingComplete(true);
  expect(store.getState().loadingComplete).toEqual(true);
});
