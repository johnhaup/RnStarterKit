// https://easy-peasy.now.sh/docs/typescript-tutorial/typed-hooks.html
import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './models';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
