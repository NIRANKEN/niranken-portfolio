import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { RootState } from '.';
import { initialState } from '../ducks/notifications';

export const createInitialRootState = (
  withState: Partial<RootState>
): RootState => ({
  notifications: {
    ...initialState,
    ...withState.notifications,
  },
});

export const mockStore = (withState: Partial<RootState>) =>
  configureMockStore<RootState, {}>([thunk])(createInitialRootState(withState));
