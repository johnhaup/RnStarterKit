import { action, Action } from 'easy-peasy';

export interface SessionModel {
  loadingComplete: boolean;
  setLoadingComplete: Action<SessionModel, boolean>;
}

export const sessionModel: SessionModel = {
  // state
  loadingComplete: false,
  // actions
  setLoadingComplete: action((state, loadingComplete) => ({
    ...state,
    loadingComplete,
  })),
};
