import { SessionModel, sessionModel } from './session';

export interface StoreModel {
  session: SessionModel;
}

export const storeModel: StoreModel = {
  session: sessionModel,
};
