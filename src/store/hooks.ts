// https://easy-peasy.now.sh/docs/typescript-tutorial/typed-hooks.html
import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './models';

const typedHooks = createTypedHooks<StoreModel>();

export const useTypedAction = typedHooks.useStoreActions;
export const useTypedDispatch = typedHooks.useStoreDispatch;
export const useTypedStoreState = typedHooks.useStoreState;
