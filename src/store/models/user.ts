import { action, Action, persist } from 'easy-peasy';
import { storage } from './../../services/storage';

interface UserState {
  onboardingComplete: boolean;
}

export interface UserModel extends UserState {
  setOnboardingComplete: Action<UserModel, boolean>;
}

export const userModel: UserModel = persist(
  {
    // state
    onboardingComplete: false,
    // actions
    setOnboardingComplete: action(
      (state, onboardingComplete): UserState => ({
        ...state,
        onboardingComplete,
      }),
    ),
  },
  { storage },
);
