import { action, Action } from 'easy-peasy';

interface SessionState {
  loadingComplete: boolean;
}
export interface SessionModel extends SessionState {
  setLoadingComplete: Action<SessionModel, boolean>;
}

export const sessionModel: SessionModel = {
  // state
  loadingComplete: false,
  // actions
  setLoadingComplete: action(
    (state, loadingComplete): SessionState => ({
      ...state,
      loadingComplete,
    }),
  ),
};
