import { SessionModel, sessionModel } from './session';
import { userModel, UserModel } from './user';

export interface StoreModel {
  session: SessionModel;
  user: UserModel;
}

export const storeModel: StoreModel = {
  session: sessionModel,
  user: userModel,
};
