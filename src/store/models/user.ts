import { action, Action, persist } from 'easy-peasy';
import { PasswordRealmResponse } from 'react-native-auth0';
import { storage } from './../../services/storage';

interface Auth extends PasswordRealmResponse {
  fetchedAt: number; // Unix timestamp in seconds
}

interface UserState {
  onboardingComplete: boolean;
  auth: Auth | null;
}

export interface UserModel extends UserState {
  setOnboardingComplete: Action<UserModel, boolean>;
  setAuth: Action<UserModel, Auth | null>;
}

export const userModel: UserModel = persist(
  {
    // state
    onboardingComplete: false,
    auth: null,
    // actions
    setOnboardingComplete: action(
      (state, onboardingComplete): UserState => ({
        ...state,
        onboardingComplete,
      }),
    ),
    setAuth: action(
      (state, auth): UserState => ({
        ...state,
        auth,
      }),
    ),
  },
  { storage },
);
